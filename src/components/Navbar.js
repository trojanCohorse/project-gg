import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [seasonsArr, setSeasonsArr] = useState([]);
  const [storedSeasons, setStoredSeasonso] = useState([1]);
  const [showSeason, setShowSeason] = useState(1);

  // when the page gets loaded, initialize first season
  // https://project-gg.herokuapp.com/seasons/1
  useEffect(() => {
    axios.get({
      method: 'GET',
      url: `https://project-gg.herokuapp.com/seasons/1`,
      responseType: "json"
    }).then((res) => {
      setSeasonsArr([{1: res}]);
    })
  }, []);
  // https://project-gg.herokuapp.com/seasons/${name}
  const changeSeason = (e) => {
    const name = e.target.name;
    setShowSeason(name);
    // check to see if value is in the storedSeasons array and update showSeason to the variable
    if (storedSeasons.filter(item => name === item).length === 0) {
      axios.get({
        method: 'GET',
        url: `https://project-gg.herokuapp.com/seasons/${name}`
      }).then((res) => {
        setSeasonsArr([...seasonsArr, {[name]: res}]);
        console.log(seasonsArr);
      })
    } 
  }

  return (
    <nav>
      <ul>
        <div className="seasons">
          <li>
            <Link to="/" name="1" onClick={changeSeason}>Season 1</Link>
          </li>
          <li>
            <Link to="/" name="2" onClick={changeSeason}>Season 2</Link>
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