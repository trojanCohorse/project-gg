import { useState, useEffect } from 'react';
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
            <Link to="/seasonOne" name="1" onClick={changeSeason}>Season 1</Link>
          </li>
          <li>
            <Link to="/seasonTwo" name="2" onClick={changeSeason}>Season 2</Link>
          </li>
          <li>
            <Link to="/" name="3" onClick={changeSeason}>Season 3</Link>
          </li>
          <li>
            <Link to="/" name="4" onClick={changeSeason}>Season 4</Link>
          </li>
          <li>
            <Link to="/" name="5" onClick={changeSeason}>Season 5</Link>
          </li>
          <li>
            <Link to="/" name="6" onClick={changeSeason}>Season 6</Link>
          </li>
          <li>
            <Link to="/" name="7" onClick={changeSeason}>Season 7</Link>
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