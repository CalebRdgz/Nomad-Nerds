import { Navigate } from "react-router-dom";

function Logout(props) {
  props.logout();
  console.log("logout", props);
  return <Navigate to="/" />;
  // need to figure out how to refresh browser after logout to ensure they are fully logged out
}

export default Logout;
