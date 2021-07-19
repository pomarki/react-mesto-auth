import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log('меня вызвали!')
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sing-in" />
      }
    </Route>
  );
};

export default ProtectedRoute;