import React from "react";

const DeleteWrapper = ({ user, commentUser, children }) => {
  return <>{user === commentUser && children}</>;
};

export default DeleteWrapper;
