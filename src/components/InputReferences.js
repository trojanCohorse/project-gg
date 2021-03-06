import { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import axiosRequest from "./episodeReq.js";
// available seasons for the season number dropdown
const seasonOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
]

// this variable will be used to store the array of episodes that correspond to the selected season number
let episodeOptions = undefined;


const InputReferences = () => {
  const [seasonNum, setSeasonNum] = useState(1);
  const [episodeNum, setEpisodeNum] = useState(1);
  const [subject, setSubject] = useState('');
  const [timestamp, setTimestamp] = useState({ minutes: 0, seconds: 0 });
  const { minutes, seconds } = timestamp;
  const [quote, setQuote] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [speakerContext, setSpeakerContext] = useState('');
  const [meaning, setMeaning] = useState('');
  const [submit, setSubmit] = useState(false);

  const findEpisodes = (season) => {
    // store the formatted episodes in the episodeOptions dropdown menu
    episodeOptions = axiosRequest(season);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // put the rest of the values on the form into an object that will be pushed to the episode array
      // that object will be pushed to the episodes array
    const reference = {
      subject: subject,
      timestamp: `${minutes}:${seconds < 10 ? "0" + seconds: seconds}`,
      quote: quote,
      speaker: speaker,
      context: speakerContext,
      meaning: meaning,
      // STRETCH -- screenshot: "https://some-picture-hosting-website.com/image"
    }
    
    // use the season number and episode number so that they can be used to check for the specific season and episode
    const seaString = (seasonNum.value).toString()
    const epString = (episodeNum.value).toString();
    console.log(typeof seaString);
    console.log(typeof epString);
    axios({
      method: 'POST',
      url: 'https://cors-anywhere.herokuapp.com/https://project-gg.herokuapp.com/seasons/add',
      data: {
        "seasonNumber": seaString,
        "episodeNumber": epString,
        "references": reference
    }
    }).then((res) => {
      alert("Reference added to approval list. Thank you!");
    }).catch( (err) => {
      alert(`Sorry, reference submit failed: ${err}`);
    });

    // set back to default values
    setSeasonNum(1);
    setEpisodeNum(1);
    setSubject('');
    setTimestamp({ minutes: 0, seconds: 0 });
    setQuote('');
    setSpeaker('');
    setSpeakerContext('');
    setMeaning('');
    setSubmit('');
  }

  return (
    <section >
      <h2>Add Your Reference!</h2>
      <form action="submit" className="referencesForm" onSubmit={handleSubmit}>
        <label htmlFor="seasonNum">Season Number</label>
        {/* NOTE even though the Selects are required, they both have an initial value of one, and the form submits even when nothing is chosen. */}
        <Select
          id="seasonNum"
          name="seasonNum"
          className="seasonSelect"
          value={seasonNum}
          options={seasonOptions}
          onChange={(seasonNum) => {
            setSeasonNum(seasonNum);
            findEpisodes(seasonNum.value);
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: '#dff3e3',
              primary: '#142c53',
            }
          })}
          required
        />

        <label htmlFor="episodeNum">Episode Number</label>
        <Select
          id="episodeNum"
          name="episodeNum"
          className="seasonSelect"
          value={episodeNum}
          options={episodeOptions}
          onChange={(episodeNum) => {
            setEpisodeNum(episodeNum);
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: '#dff3e3',
              primary: '#142c53',
            }
          })}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <fieldset>
          {/* TODO use regex to check numbers */}
          <legend>Time Stamp</legend>
          <div className="minutes">
            <label htmlFor="minutes">Minutes</label>
            <input 
              type="number"
              id="minutes"
              name="minutes"
              value={minutes}
              onChange={(e) => setTimestamp({...timestamp, minutes: e.target.value })}
              min="0"
              max="60"
              required
            />
          </div>
          <div className="seconds">
            <label htmlFor="seconds">Seconds</label>
            <input
              type="number"
              id="seconds"
              name="seconds"
              value={seconds}
              onChange={(e) => setTimestamp({ ...timestamp, seconds: e.target.value})}
              min="0"
              max="59"
              required
            />
          </div>
        </fieldset>

        <label htmlFor="quote">Quote</label>
        <textarea
          id="quote"
          name="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
          ></textarea>

        <label htmlFor="speaker">Speaker</label>
        <input
          type="text"
          id="speaker"
          name="speaker"
          value={speaker}
          onChange={(e) => setSpeaker(e.target.value)}
          required
        />

        <label htmlFor="speakerContext">Context</label>
        <textarea
          id="speakerContext"
          name="speakerContext"
          value={speakerContext}
          onChange={(e) => setSpeakerContext(e.target.value)}
          required
        ></textarea>

        <label htmlFor="meaning">Meaning</label>
        <textarea
          id="meaning"
          name="meaning"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          required
        ></textarea>

        <div className="buttons">
          {/* Stretch */}
          <button>Add Another Reference</button>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default InputReferences;