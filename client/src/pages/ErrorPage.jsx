import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NavBar, PageContent } from '../components';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An Error has occurred';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = JSON.parse(error.data)?.message
      ? JSON.parse(error.data)?.message
      : 'Server Error';
  }
  if (error.status == 404) {
    title = 'Not found';
    message = 'Could not find resource or page';
  }
  const content = {
    title,
    message,
  };
  return (
    <div>
      <NavBar />
      <PageContent content={content} />
    </div>
  );
};

export default ErrorPage;
