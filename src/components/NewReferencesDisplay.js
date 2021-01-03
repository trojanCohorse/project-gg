import { useState, useEffect, } from 'react';
import axios from 'axios';
import postRefToDb from './referencePost.js';

const NewReferencesDisplay = ()=> {
  const [ approvalData, setApprovalData ] = useState([]);
  // state for expanding the quote, context, and meaning paragraphs for when they exceed a certain character limit
  const [readMore, setReadMore] = useState(false);
  
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://project-gg.herokuapp.com/seasons/approve`
    }).then(res => {
      const input = res.data.sort((a, b) => a.seasonNumber - b.seasonNumber);
      console.log(input);
      const inputSorted = input.sort((a, b) => a.episodeNumber - b.episodeNumber);
      console.log(inputSorted);
      console.log('Stuff to approve', res.data);
      setApprovalData(res.data);
      console.log(approvalData);
    }).catch(err => console.log(err));
  }, [])
  console.log('Initial log');

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
                        <button onClick={ () => postRefToDb(reference.subject, reference.timestamp, reference.quote, reference.speaker, reference.context, reference.meaning, item.seasonNumber, item.episodeNumber, i) }>Approve</button>
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