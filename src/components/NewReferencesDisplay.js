import { useState, useEffect, } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import postRefToDb from './referencePost.js';



const NewReferencesDisplay = ()=> {
  const { user, isAuthenticated } = useAuth0();
  const [ approvalData, setApprovalData ] = useState([]);
  // state for expanding the quote, context, and meaning paragraphs for when they exceed a certain character limit
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://project-gg.herokuapp.com/seasons/approve`
    }).then(res => {
      const modifyTime = (timestamp) => {
        const inputMinutes = timestamp.match(/^\d+/)[0];
        const inputSeconds = timestamp.match(/\d+$/)[0];
        return Number(inputMinutes) * 60 + Number(inputSeconds);
      }
      const sortingTimestamps = [];
      res.data.forEach((obj) => {
        obj.references.sort((a, b) => {
          const sortedTimeA = modifyTime(a.timestamp);
          const sortedTimeB = modifyTime(b.timestamp);
          return sortedTimeA - sortedTimeB;
        })
        sortingTimestamps.push(obj);
      })
      const sortedSeasons = sortingTimestamps.sort((a, b) => a.seasonNumber - b.seasonNumber || a.episodeNumber - b.episodeNumber);
      setApprovalData(sortedSeasons);
    }).catch(err => console.log(err));
  }, [])

  return(
    <section className="newRefs">
      <h2>References Awaiting Approval</h2>
      {
        approvalData.map((item, episodeIndex) => {
          return (

            <div key={episodeIndex} className="wrapper">
              <h3>Season: {item.seasonNumber}</h3>
              <h4>Episode: {item.episodeNumber}</h4>
              <div className="episodeContainer">
                {
                  item.references.map((reference, i) => {
                    return (
                      <article key={i} className="episodeRef">
                        <div className="entryLine">
                          <h5>Subject:</h5>
                          <p className="scroll">{reference.subject}</p>
                        </div>
                        <div className="entryLine">
                          <h5>Time Stamp:</h5>
                          <p>{reference.timestamp}</p>
                        </div>
                        <div className="entryLine">
                          <h5>Quote:</h5>
                          <p className="scroll">{reference.quote}</p>
                        </div>
                        <div className="entryLine">
                          <h5>Speaker:</h5>
                          <p className="scroll">{reference.speaker}</p>
                        </div>
                        <div className="entryLine">
                          <h5>Context:</h5>
                          <p className="scroll">{reference.context}</p>
                        </div>
                        <div className="entryLine">
                          <h5>Meaning:</h5>
                          <p className="scroll">{reference.meaning}</p>
                        </div>
                        {(isAuthenticated && (user.sub === 'auth0|5ff1e3bfe00a83006e89c066' || user.sub === 'google-oauth2|114200838558211120591' || user.sub === 'google-oauth2|109142349949295009924' || user.sub === 'google-oauth2|105943216189762454578')) ? <button onClick={ () => postRefToDb(reference.subject, reference.timestamp, reference.quote, reference.speaker, reference.context, reference.meaning, item.seasonNumber, item.episodeNumber, i) }>Approve</button> : null}
                      </article>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }






      {/* {approvalData.map((item, index) => {
        return (
          <article key={index}>
            <p>Index: {index}</p>
            <p>Subject: {item.subject}</p>
            <p>Timestamp: {item.timestamp}</p>
            <p>Quote: {item.quote}</p>
            <p>Speaker: {item.speaker}</p>
            <p>Context: {item.context}</p>
            <p>Meaning: {item.meaning}</p>
            <button onClick={ () => postRefToDb(item.subject, item.timestamp, item.quote, item.speaker, item.context, item.meaning) }>Approve</button>
          </article>
        )
      })} */}
    </section>
  );
}


export default NewReferencesDisplay;


