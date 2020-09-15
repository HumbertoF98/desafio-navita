import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

//layout for all pages
import DefaultLayout from "../views/defaultlayout";

export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
