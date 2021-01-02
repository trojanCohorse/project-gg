import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js'

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    console.log(user);
  }
  return (
    <nav>
      <ul>
        <div className="seasons">
          <li>
            <Link to="/season/1" >Season 1</Link>
          </li>
          <li>
            <Link to="/season/2" >Season 2</Link>
          </li>
          <li>
            <Link to="/season/3" >Season 3</Link>
          </li>
          <li>
            <Link to="/season/4" >Season 4</Link>
          </li>
          <li>
            <Link to="/season/5" >Season 5</Link>
          </li>
          <li>
            <Link to="/season/6" >Season 6</Link>
          </li>
          <li>
            <Link to="/season/7" >Season 7</Link>
          </li>
        </div>
        <div className="navLinks">
          <li>
            <Link to="/input">New Reference</Link>
          </li>
          <li>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;