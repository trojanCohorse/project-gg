import axios from 'axios';

const axiosRequest = (seasonNum) => {
  // formatted array that has returned values from map, and then gets returned itself
  const readyToExport = [];
  
  axios({
    method: 'GET',
    url: `https://project-gg.herokuapp.com/seasons/${seasonNum}`,
    responseType: "json"
    // data: {
    //   episodeNumber: episodeNum,
    //   episodeName: name
    // },
    // params: {
    //   seasonNumber: seasonNum.value,
    // }
  }).then((res) => {
    // console.log('maloned', res.data[0].episodes);
    const episodesArr =res.data[0].episodes;
    

    episodesArr.map(episode => {
      // console.log(episode.episodeNumber, episode.name);
      const formattedEpisode = {
        value: episode.episodeNumber,
        label: `${episode.episodeNumber} - ${episode.name}`
      }
      readyToExport.push(formattedEpisode);
      // { value: episode number, label: episode number - episode name }
    });
    // console.log(readyToExport);
    // return formattedEpisodes;
  }).catch((err) => console.log(err));
  
  return readyToExport;
}

export default axiosRequest;