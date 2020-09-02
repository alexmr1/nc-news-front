import React from "react";

const ErrorPage = ({ msg, status }) => {
  return (
    <h5>
      {" "}
      Oups! Somethings went wrong - status: {status}. {msg}{" "}
    </h5>
  );
};

export default ErrorPage;
