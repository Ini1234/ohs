import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styles from './style';
import HomePage from './pages/HomePage';
import MySpacePage from './pages/MySpacePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import MySpaceRoot from './pages/MySpaceRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },

  {
    path: '/myspace',
    element: <MySpaceRoot />,
    errorElement: <ErrorPage />,
    children: [{ path: '', element: <MySpacePage /> }],
  },
  {
    path: '/ini',
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
