import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import User from '../models/User.js';
import { createError } from '../utils/error.js';
import pool from './../database.js';

// Register New User
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const username = req.body.username ? req.body.username : 'ini';
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    const insertSTMT = `INSERT INTO users (username, password, email, first_name,last_name) VALUES ('${username}', '${hash}', '${email}', '${first_name}', '${last_name}');`;

    pool
      .query(insertSTMT)
      .then((response) => {
        console.log('Success');
        console.log(response);
      })
      .catch((err) => {
        console.log('Error: ', err);
        //return next(createError(500, 'Unable to create User'));
      });

    console.log(req.body);
    res.send('Response recieves' + req.body);
  } catch (err) {
    next(err);
  }
};

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

          console.log(isCorrectPassword);
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
