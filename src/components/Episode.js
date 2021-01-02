import { useParams } from 'react-router-dom';

const Episode = () => { 
  const params = useParams();
  console.log(params);
  return (
    <p>Season: {params.seasonNum}, Episode: {params.episodeNum}</p>
  )
}

export default Episode;