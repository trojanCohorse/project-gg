import { useState, useEffect, } from 'react';
import axios from 'axios';
import postRefToDb from './referencePost.js';

const NewReferencesDisplay = ()=> {
  const [ approvalData, setApprovalData ] = useState([]);
  
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://project-gg.herokuapp.com/seasons/approve`
    }).then(res => {
      console.log('Stuff to approve', res.data);
      setApprovalData(res.data);
      console.log(approvalData);
    }).catch(err => console.log(err));
  }, [])
  console.log('Initial log');

  return(
    <div>
      {
        approvalData.map((item, episodeIndex) => {
          return (
            <article key={episodeIndex}>
              <h3>Season: {item.seasonNumber}</h3>
              <h3>Season: {item.episodeNumber}</h3>
              {
                item.references.map((reference, i) => {
                  return (
                    <article key={i}>
                      <p>Subject: {reference.subject}</p>
                      <p>Timestamp: {reference.timestamp}</p>
                      <p>Quote: {reference.quote}</p>
                      <p>Speaker: {reference.speaker}</p>
                      <p>Context: {reference.context}</p>
                      <p>Meaning: {reference.meaning}</p>
                      <button onClick={ () => postRefToDb(reference.subject, reference.timestamp, reference.quote, reference.speaker, reference.context, reference.meaning, item.seasonNumber, item.episodeNumber, i) }>Approve</button>
                    </article>
                  )
                })
              }
            </article>
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
    </div>
  );
}


export default NewReferencesDisplay;