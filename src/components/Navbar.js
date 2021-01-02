import { Route } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <Link to="/approve">Approve Ref</Link>
          </li>
          <li>
            <Link to="/input">New Reference</Link>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;