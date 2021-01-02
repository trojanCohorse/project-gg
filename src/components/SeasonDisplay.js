import { useState, useEffect, } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SeasonDisplay = ( props ) => {
  const { seasonNum } = useParams();
  const seasonNumber = Number(seasonNum);
  // console.log(seasonNumber);
  const [seasonsObj, setSeasonsObj] = useState({});
  const [showSeason, setShowSeason] = useState(seasonNumber);

  // when the page gets loaded, initialize first season
  // https://project-gg.herokuapp.com/seasons/1
  // http://127.0.0.1:5000/seasons/1
  useEffect(() => {
    if (typeof seasonsObj[seasonNum] === 'undefined') {
      console.log(seasonNumber);
      axios({
        method: 'GET',
        url: `https://project-gg.herokuapp.com/seasons/${seasonNum}`
      }).then(res => {
        setSeasonsObj({ [seasonNum]: [res.data[0]] })
      }).catch(err => console.log(err));
    }
  }, []);
  // https://project-gg.herokuapp.com/seasons/${name}

  // const changeSeason = (e) => {
  //   const name = e.target.name;
  //   setShowSeason(name);
  //   // check to see if value is in the storedSeasons array and update showSeason to the variable
  //   if (!seasonsObj[name]) {
  //     axios({
  //       method: 'GET',
  //       url: `https://project-gg.herokuapp.com/seasons/${name}`
  //     }).then((res) => {
  //       setSeasonsObj({ ...seasonsObj, [name]: res.data[0] });
  //       console.log(seasonsObj);
  //     })
  //   } else {
  //   }
  // } 


  // seasonsObj[1][0].episodes
  if (typeof seasonsObj[1] !== 'undefined') console.log(seasonsObj[1][0].episodes);
  // console.log(props.match.params.seasonNumber);
  
  return (  
    <div>
      <h1>Season {seasonNum}</h1>
      <ul>
        {
          typeof seasonsObj[seasonNum] !== 'undefined' && (
            seasonsObj[seasonNum][0].episodes.map((episode) => {
              const { episodeNumber, name, overallNumber, references, seasonNumber } = episode;
              return (
                <li key={episodeNumber}>
                  <h2>{name}</h2>
                  <h3> Episode {episodeNumber}</h3>
                  <p>Image Goes Here</p>
                  <Link to="/references">See References</Link>
                </li>
              )
            })
          )
        }
      </ul>
    </div>
  )
}

export default SeasonDisplay;
