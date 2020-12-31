import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const seasonOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
]

// const episodeOptions = [{1 to max number depending on the season number}]
    // get request based on season number?
  // season 1 episodes -> { value: 1, label: "1 - Pilot" }
  // season 2 episodes
  // season 3 episodes
  // season 4 episodes
  // season 5 episodes
  // season 6 episodes
  // season 7 episodes

const InputReferences = () => {
  const [seasonNum, setSeasonNum] = useState(1);
  const [episodeNum, setEpisodeNum] = useState(1);
  const [episodeName, setEpisodeName] = useState('');
  const [subject, setSubject] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [quote, setQuote] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [speakerContext, setSpeakerContext] = useState('');
  const [meaning, setMeaning] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // store the season number, episode number and episode name so that they can be used to check for the specific season and episode
    // all of the other values need to be placed inside of an object
      // that object will be pushed to the episodes array

    // put in object to push to the episode array
    const reference = {
      // id: 1, --> Array.length ; added in backend
      subject: subject,
      timestamp: timestamp,
      quote: quote,
      speaker: speaker,
      context: speakerContext,
      meaning: meaning,
      // screenshot: "https://some-picture-hosting-website.com/image"
    }

    // STRETCH: middleware to validate references

    axios.post({
      method: 'POST',
      url: 'https://project-gg.herokuapp.com/seasons/references/add',
      data: {
        seasonNumber: seasonNum.value,
        episodeNumber: episodeNum,
        references: reference
      }
    }).then((res) => {
      console.log('maloned', res);
    });

    // set back to default values
    setSeasonNum(1);
    setEpisodeNum(1);
    setEpisodeName('');
    setSubject('');
    setTimestamp('');
    setQuote('');
    setSpeaker('');
    setSpeakerContext('');
    setMeaning('');
    setSubmit('');
  }

  return (
    <section className="referencesForm">
      <h2>Add your reference!</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="seasonNum">Season Number</label>
        <Select
          // name="seasonNum"
          className="seasonSelect"
          value={seasonNum}
          options={seasonOptions}
          onChange={(seasonNum) => setSeasonNum(seasonNum)}
          required
        />

        <label htmlFor="episodeNum">Episode Number</label>
        <input
          type="text"
          name="episodeNum"
          value={episodeNum}
          onChange={(e) => setEpisodeNum(e.target.value)}
          required
        />

        <label htmlFor="episodeName">Episode Name</label>
        <input
          type="text"
          name="episodeName"
          value={episodeName}
          onChange={(e) => setEpisodeName(e.target.value)}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="timestamp">Time Stamp</label>
        <input
          type="text"
          name="timestamp"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          required
        />

        <label htmlFor="quot">Quote</label>
        <input
          type="text"
          name="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          required
        />

        <label htmlFor="speaker">Speaker</label>
        <input
          type="text"
          name="speaker"
          value={speaker}
          onChange={(e) => setSpeaker(e.target.value)}
          required
        />

        <label htmlFor="speakerContext">Context</label>
        <input
          type="text"
          name="speakerContext"
          value={speakerContext}
          onChange={(e) => setSpeakerContext(e.target.value)}
          required
        />

        <label htmlFor="meaning">Meaning</label>
        <input
          type="text"
          name="meaning"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          required
        />

        <input type="submit" value="Submit" />
        {/* STRETCH */}
        <button>Add Another Reference</button>
      </form>
    </section>
  );
}

export default InputReferences;