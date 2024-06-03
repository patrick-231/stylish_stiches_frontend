import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, redirect = '/login', ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('auth-token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirect} />
        )
      }
    />
  );
};

export default ProtectedRoute;