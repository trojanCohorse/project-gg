import { useParams } from 'react-router-dom';
// 
const Episode = (props) => { 
  const params = useParams();
  console.log(params);
  return (
    <p>Season: {params.seasonNum}, Episode: {params.episodeNum}</p>
  )
}

export default Episode;