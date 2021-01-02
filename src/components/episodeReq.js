import axios from 'axios';

const axiosRequest = (seasonNum) => {
  // formatted array that has returned values from map, and then gets returned itself
  const readyToExport = [];
  // https://project-gg.herokuapp.com/seasons/${seasonNum}
  axios({
    method: 'GET',
    url: `https://project-gg.herokuapp.com/seasons/${seasonNum}`,
    responseType: "json"
  }).then((res) => {
    const episodesArr =res.data[0].episodes;
    

    episodesArr.map(episode => {
      const formattedEpisode = {
        value: episode.episodeNumber,
        label: `${episode.episodeNumber} - ${episode.name}`
      }
      readyToExport.push(formattedEpisode);
    });
  }).catch((err) => console.log(err));
  
  return readyToExport;
}

export default axiosRequest;