import { Navigate } from "react-router-dom";

function Logout(props) {
  props.logout();
  console.log('logout', props)
  return <Navigate to="/" />;
}

export default Logout;