import { NavLink } from 'react-router-dom';
import { useToken } from './users/Auth';
import Button from 'react-bootstrap/Button';
import './index.css';

export const loggedIn = [
  { name: "Favorites", path:"user/mine/favorites/"},
  { name: "Logout", path:"user/logout/"}
]

export const loggedOut = [
  { name: "Signup", path:"user/signup/"},
  { name: "Login", path:"user/login/" }
]

const ifLoggedIn = "navbar-nav";
const ifLoggedOut = "navbar-nav";


function Nav(props) {
  const [token] = useToken();
  const links = token ? loggedIn : loggedOut;
  console.log('token', token)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Nomad Nerds</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul
            className={token ? ifLoggedIn : ifLoggedOut}
          >
            {links.map((link, index) => (
              <NavLink key={index} to={link.path}>
                <Button variant="outline-secondary">
                  {link.name}
                </Button>
              </NavLink>
            ))}
          </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav;

