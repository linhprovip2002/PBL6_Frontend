import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return children;
  } else {
    return <Link href="/login" replace />;
  }
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
