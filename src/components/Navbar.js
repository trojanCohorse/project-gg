import { useState, useEffect, Route } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showSeasons }) => {
  const [showSeason, setShowSeason] = useState(1);

  const changeSeason = (e) => {
    setShowSeason(e.target.name);
  }

  return (
    <nav>
      <ul>
        <div className="seasons">
          <li>
            <Link to="/season/1" name="1" onClick={changeSeason}>Season 1</Link>
          </li>
          <li>
            <Link to="/season/2" name="2" onClick={changeSeason}>Season 2</Link>
          </li>
          <li>
            <Link to="/season/3" name="3" onClick={changeSeason}>Season 3</Link>
          </li>
          <li>
            <Link to="/season/4" name="4" onClick={changeSeason}>Season 4</Link>
          </li>
          <li>
            <Link to="/season/5" name="5" onClick={changeSeason}>Season 5</Link>
          </li>
          <li>
            <Link to="/season/6" name="6" onClick={changeSeason}>Season 6</Link>
          </li>
          <li>
            <Link to="/season/7" name="7" onClick={changeSeason}>Season 7</Link>
          </li>
        </div>
        <div className="navLinks">
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