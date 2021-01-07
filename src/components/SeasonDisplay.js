import { useState, useEffect, } from 'react';
import { Route, Link, useParams, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import Episode from './Episode.js';
import Season from './Season.js';

const SeasonDisplay = () => {
  const { seasonNum } = useParams();
  const { url } = useRouteMatch();
  const [episodeObj, setEpisodeObj] = useState({});
  const [episodeNum, setEpisodeNum] = useState(1);

  const getEpisodeAxios = async () => {
    return await axios.get(`https://project-gg.herokuapp.com/seasons/${seasonNum}/episodes/${episodeNum}`)
      .then(res => {
        const newEpisodeObj = episodeObj;
        newEpisodeObj[seasonNum] = { [episodeNum]: res.data[0] };
        setEpisodeObj(newEpisodeObj);
        return res.data[0];
      })
      .catch(err => alert('Err: ', err));
  }

  const [seasonsObj, setSeasonsObj] = useState({});
  const [showSeason, setShowSeason] = useState(seasonNum);
  if (showSeason !== seasonNum) setShowSeason(seasonNum); // this is to prevent rerenders

  useEffect(() => {
    if (typeof seasonsObj[showSeason] === 'undefined') {
      axios({
        method: 'GET',
        url: `https://project-gg.herokuapp.com/seasons/${showSeason}`
      }).then(res => {
        setSeasonsObj({...seasonsObj, [showSeason]: [res.data[0]] })
      }).catch(err => alert(err));
    }
  }, [showSeason]);

  const changeEpisodeNum = (num) => {
    setEpisodeNum(num);
    return num;
  }

  const getEpisode = async () => {
    if (!episodeObj[seasonNum]) {
      const result = await getEpisodeAxios();
      return result;
    } else if (!episodeObj[seasonNum][episodeNum]) {
      const result = await getEpisodeAxios();
      return result;
    }
    return episodeObj[seasonNum][episodeNum];
  }

  return (
    <div>
      <h2>Season {seasonNum}</h2>
      <Switch>
        <Route exact path={`${url}`} render={() => (
          <Season season={seasonsObj[showSeason]} />
        )} />
        <Route path={`${url}/episode/:episodeNum`} render={() => (
          <Episode getEpisode={getEpisode} changeEpisodeNum={changeEpisodeNum} />
        )} />
      </Switch>
    </div>
  )
}

export default SeasonDisplay;

