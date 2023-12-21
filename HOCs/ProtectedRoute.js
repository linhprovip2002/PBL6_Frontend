import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, loggedin }) => {
  const { push } = useRouter();

  useEffect(() => {
    if (!loggedin) {
      push("/login");
    }
  }, [loggedin]);
  if (loggedin) {
    return children;
  }
};
const mapStateToProps = (state) => ({
  loggedin: state.auth.loggedin,
});

export default connect(mapStateToProps)(ProtectedRoute);
