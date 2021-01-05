import Fragment, { useRef } from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js'

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const checkBox = document.getElementById('dropDownMenu');
  const changeCheckedToFalse = (checkBoxTarget) => {
    checkBoxTarget.checked = false;
    return checkBoxTarget;
  };
  return (
    <div>
      {/* drop down menu that will occur at media query 1135px */}
      <input type="checkbox" name="dropDownMenu" id="dropDownMenu" />
      <div className="menuToggle">
        <label htmlFor="dropDownMenu" aria-label="Menu">
          {/* hamburger menu */}
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <nav>
        <ul className="wrapper">
          <div className="seasons">
            <li>
              <Link to="/season/1" onClick={() => changeCheckedToFalse(checkBox)}>Season 1</Link>
            </li>
            <li>
              <Link to="/season/2" onClick={() => changeCheckedToFalse(checkBox)}>Season 2</Link>
            </li>
            <li>
              <Link to="/season/3" onClick={() => changeCheckedToFalse(checkBox)}>Season 3</Link>
            </li>
            <li>
              <Link to="/season/4" onClick={() => changeCheckedToFalse(checkBox)}>Season 4</Link>
            </li>
            <li>
              <Link to="/season/5" onClick={() => changeCheckedToFalse(checkBox)}>Season 5</Link>
            </li>
            <li>
              <Link to="/season/6" onClick={() => changeCheckedToFalse(checkBox)}>Season 6</Link>
            </li>
            <li>
              <Link to="/season/7" onClick={() => changeCheckedToFalse(checkBox)}>Season 7</Link>
            </li>
          </div>
          <div className="navLinks">
            <li>
              <Link to="/approve" onClick={() => changeCheckedToFalse(checkBox)}>Approve Ref</Link>
            </li>
            <li>
              <Link to="/input" onClick={() => changeCheckedToFalse(checkBox)}>New Reference</Link>
            </li>
            <li>
              {isAuthenticated ? <LogoutButton onClick={() => changeCheckedToFalse(checkBox)}/> : <LoginButton onClick={() => changeCheckedToFalse(checkBox)}/>}
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;