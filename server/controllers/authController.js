import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import User from '../models/User.js';
import { createError } from '../utils/error.js';
import pool from './../database.js';
import AppError from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

// Register New User
export const register = catchAsync(async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const username = req.body.username;
  const email = req.body.email;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;

  const insertSTMT = `INSERT INTO users (username, password, email, first_name,last_name) VALUES ('${username}', '${hash}', '${email}', '${first_name}', '${last_name}');`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log('Success');
      const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET);
      res
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .status(200)
        .json({ username, email, first_name, last_name });
    })
    .catch((err) => {
      next(new AppError(`Unable to add user! ${err}`, 500));
    });
});

// login user
export const login = async (req, res, next) => {
  let user = {};
  try {
    const sql = `SELECT * FROM users WHERE email = '${req.body.email}'`;
    pool
      .query(sql)
      .then(async (response) => {
        if (response.rowCount < 1) {
          return next(createError(404, 'User not found!'));
        } else {
          user = response.rows[0];

          const isCorrectPassword = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!isCorrectPassword) {
            return next(createError(400, 'Wrong Username or Password'));
          } else {
            const token = jwt.sign(
              { id: user.user_id },
              process.env.JWT_SECRET
            );
            const { password, ...otherDetails } = user;

            res
              .cookie('access_token', token, {
                httpOnly: true,
              })
              .status(200)
              .json({ ...otherDetails });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    next(err);
  }
};
