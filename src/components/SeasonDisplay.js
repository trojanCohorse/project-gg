import { useState, useEffect } from 'react'; 
import axios from 'axios';

const SeasonDisplay = ( season ) => {
  const [seasonsObj, setSeasonsObj] = useState({});
  const [showSeason, setShowSeason] = useState(1);

  // when the page gets loaded, initialize first season
  // https://project-gg.herokuapp.com/seasons/1
  // http://127.0.0.1:5000/seasons/1
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://project-gg.herokuapp.com/seasons/1'
    }).then(res => {
      setSeasonsObj({ 1: [res.data[0]] })
      console.log(seasonsObj);
    }).catch(err => console.log(err));
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
        setSeasonsObj({ ...seasonsObj, [name]: res.data[0] });
        console.log(seasonsObj);
      })
    } else {
    }
  } 

  if (seasonsObj) console.log(seasonsObj[1]);

  return (  
    <div>
      <p>Season {}</p>
    </div>
  )
}

export default SeasonDisplay;
