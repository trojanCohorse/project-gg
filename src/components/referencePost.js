import axios from 'axios';

const postRefToDb = (subject, timestamp, quote, speaker, context, meaning, seasonNumber, episodeNumber) => {
  axios({
    method: 'POST',
    url: 'https://project-gg.herokuapp.com/seasons/references/add',
    data: {
      "seasonNumber": seasonNumber,
      "episodeNumber": episodeNumber,
      "references": {
        "subject": subject,
        "timestamp": timestamp,
        "quote": quote,
        "speaker": speaker,
        "context": context,
        "meaning": meaning
      }
  }
  }).then((res) => {
    console.log('maloned', res);
  }, (err) => console.log(err));
}

export default postRefToDb;