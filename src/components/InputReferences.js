import { useState, useEffect } from 'react';
import axios from 'axios';

const InputReferences = () => {
  const [seasonNum, setSeasonNum] = useState(1);
  const [episodeNum, setEpisodeNum] = useState(1);
  const [episodeName, setEpisodeName] = useState('');
  const [subject, setSubject] = useState('');
  const [timestamp, setTimestamp] = useState("");
  const [quote, setQuote] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [speakerContext, setSpeakerContext] = useState('');
  const [meaning, setMeaning] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('season num: ', seasonNum);
    setSubmit(!submit);
  }
  useEffect(() => {
    console.log('test');
    // axios.post({
    //   method: 'post',
    //   url: '',
    //   data: {
    //     season: seasonNum,
    //     episode: episodeNum,
    //     name: episodeName,
    //     references: [
          
    //     ]
    //   }
    // }).then((res) => {
    //   console.log('maloned', res);
    // });
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
  }, [submit])
  
  // componentDidMount
  // useEffect(() => {
  // const res = await axios.post('https:sample-endpoint.com/data')
  // })
  return (
    <section className="referencesForm">
      <h2>Add your reference!</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="seasonNum">Season Number</label>
        <input
          type="text"
          name="seasonNum"
          value={seasonNum}
          onChange={(e) => setSeasonNum(e.target.value)}
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
      </form>
    </section>
  );
}

export default InputReferences;