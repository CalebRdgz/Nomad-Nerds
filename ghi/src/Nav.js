import { NavLink } from 'react-router-dom';
import { useToken } from './users/Auth';
import './index.css';

export const loggedIn = [
  { name: "Logout", path:"user/logout/"},
  { name: "Favorites", path:"user/favorites/"}
]

export const loggedOut = [
  { name: "Login", path:"user/login/" },
  { name: "Signup", path:"user/signup/"}
]

const ifLoggedIn = "navbar-nav";
const ifLoggedOut = "navbar-nav";


function Nav(props) {
  const [token] = useToken();
  const links = token ? loggedIn : loggedOut;
  console.log('props.token', props.token)

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
            className={props.token ? ifLoggedIn : ifLoggedOut}
          >
            {links.map((link, index) => (
              <NavLink key={index} to={link.path}>
                <button className='btn button-39 mx-5'>
                  {link.name}
                </button>
              </NavLink>
            ))}
          </ul>
        </div>
    </div>
    </nav>
  )
}

export default Nav;

