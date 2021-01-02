import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [seasonsObj, setSeasonsObj] = useState({});
  const [showSeason, setShowSeason] = useState(1);

  // when the page gets loaded, initialize first season
  // https://project-gg.herokuapp.com/seasons/1
  // http://127.0.0.1:5000/seasons/1
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://project-gg.herokuapp.com/seasons/1'
    }).then(res => setSeasonsObj({ 1: [res.data[0]] }))
      .catch(err => console.log(err));
  }, []);
  // https://project-gg.herokuapp.com/seasons/${name}
  
  const changeSeason = (e) => {
    const name = e.target.name;
    setShowSeason(name);
    // check to see if value is in the storedSeasons array and update showSeason to the variable
    if (!seasonsObj[name]) {
      axios({
        method: 'GET',
        url: `https://project-gg.herokuapp.com/seasons/${name}`
      }).then((res) => {
        setSeasonsObj({...seasonsObj,  [name]: res.data[0] });
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