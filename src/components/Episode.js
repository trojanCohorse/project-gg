// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const Episode = (props) => { 
  const { episodeNum } = useParams();
  const [result, setResult] = useState(0);
  const [episodeResult, setEpisodeResult] = useState([]);

  useEffect(async () => {
    const result = await props.changeEpisodeNum(episodeNum);
    setResult(5);
  }, [])

  useEffect(() => {
    props.getEpisode().then((res) => setEpisodeResult(res));
  }, [result])

  // console.log(result);
  // console.log(props.episodeObj[props.seasonNum]);
  // console.log(props.episodeObj[props.seasonNum][episodeNum].episodeNumber);
  // const episodeObj = props.episodeObj;

  // console.log(episodeNum, props.seasonNum);

  return (
    <section className="episodeInfo">
      <p>episode info here</p>
      {episodeResult && (
        <p>{episodeResult.episodeNumber}</p>
      )}
      {/* { Object.keys(episodeObj).length > 0 && (
        <p>{props.episodeObj[props.seasonNum][episodeNum].episodeNumber}</p>
      )} */}
    </section>
  )
}

export default Episode;