import { useState, useEffect, } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SeasonDisplay = () => {
  const { seasonNum } = useParams();

  const [seasonsObj, setSeasonsObj] = useState({});
  const [showSeason, setShowSeason] = useState(seasonNum);
  // line below is to prevent rerenders
  if (showSeason !== seasonNum) setShowSeason(seasonNum);

  // when the page gets loaded, initialize first season
  // https://project-gg.herokuapp.com/seasons/1
  // http://127.0.0.1:5000/seasons/1
  useEffect(() => {
    if (typeof seasonsObj[showSeason] === 'undefined') {
      axios({
        method: 'GET',
        url: `https://project-gg.herokuapp.com/seasons/${showSeason}`
      }).then(res => {
        console.log('gotted');
        setSeasonsObj({...seasonsObj, [showSeason]: [res.data[0]] })
      }).catch(err => console.log(err));
    }
  }, [showSeason]);

  return (  
    <div>
      <h2>Season {showSeason}</h2>
      <ul className="episodeList wrapper">
        {
          typeof seasonsObj[showSeason] !== 'undefined' && (
            seasonsObj[showSeason][0].episodes.map((episode) => {
              const { episodeNumber, name, overallNumber, references, seasonNumber } = episode;
              return (
                <li key={episodeNumber} className="episodeCard">
                  <h3>{name}</h3>
                  <h4> Episode {episodeNumber}</h4>

                  <p>Image Goes Here</p>
                  <Link to={`/season/${showSeason}/episode/${episodeNumber}`} >See References</Link>
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
