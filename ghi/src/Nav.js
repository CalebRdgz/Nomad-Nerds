import { NavLink } from 'react-router-dom';
import './index.css';

export const loggedinLinks = [
  { name: "Logout", path:"user/logout/"},
  { name: "Favorites", path:"user/favorites/"}
]

export const loggedoutLinks = [
  { name: "Login", path:"user/login/" },
  { name: "Signup", path:"user/signup/"}
]

// const classIfLoggedIn = "navbar-nav";
// const classIfNotLoggedIn = "navbar-nav";


function Nav(props) {
  const links = props.token ? loggedinLinks : loggedoutLinks;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Nomad Nerds</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
            <ul className="nav-item">
              <NavLink aria-current="page" to="user/signup/">Signup</NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink aria-current="page" to="user/login/">Login</NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink aria-current="page" to="user/logout/">Logout</NavLink>
            </ul>
            <ul className="nav-item">
              <NavLink aria-current="page" to="user/favorites/">Favorites</NavLink>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav;

