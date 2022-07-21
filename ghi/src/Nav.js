import { NavLink } from 'react-router-dom';
import { useToken } from './users/Auth';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import './index.css';

export const loggedIn = [
  { name: "Favorites", path:"user/mine/favorites/"},
  { name: "Log Out", path:"user/logout/"}
]

export const loggedOut = [
  { name: "Log In", path:"user/login/" },
  { name: "Sign Up", path:"user/signup/"}
]

const ifLoggedIn = "navbar-nav";
const ifLoggedOut = "navbar-nav";


function Nav() {
  const [token] = useToken();
  const links = token ? loggedIn : loggedOut;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img
          className="d-block w-100"
          src={ logo } height={40} />
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul
            className={token ? ifLoggedIn : ifLoggedOut}
          >
            {links.map((link, index) => (
              <li className="px-2" key={index}>
                <NavLink to={link.path}>
                <Button variant="outline-secondary" >
                  {link.name}
                </Button>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav;

