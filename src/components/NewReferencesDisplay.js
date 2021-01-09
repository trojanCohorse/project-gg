import { useState, useEffect, } from 'react';
import axios from 'axios';
import ApproveRefCard from './ApproveRefCard.js';

const NewReferencesDisplay = ()=> {
  const [ approvalData, setApprovalData ] = useState([]);

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
      /* const sortedSeasons = sortingTimestamps.sort((a, b) => {
        if the number that is returned to the .sort is less than 0 sort *a* to a lower index than *b*
        if (a.seasonNumber < b.seasonNumber) {
          return -1;
        } else if (a.seasonNumber > b.seasonNumber) {
          if the number that is returned is greater than 0 sort *a* 
          return 1;    
        }
      }) */
      const sortedSeasons = sortingTimestamps.sort((a, b) => a.seasonNumber - b.seasonNumber || a.episodeNumber - b.episodeNumber);
      setApprovalData(sortedSeasons);
    }).catch(err => alert(err));
  }, [])

  return(
    <section className="newRefs">
      <h2>References Awaiting Approval</h2>
      {
        approvalData.map((item, episodeIndex) => {
          const { seasonNumber, episodeNumber } = item;
          return (
            <div key={episodeIndex} className="wrapper">
              <h3>Season: {seasonNumber}</h3>
              <h4>Episode: {episodeNumber}</h4>
              <div className="episodeContainer">
                {
                  item.references.map((reference, i) => {
                    return (
                      <ApproveRefCard 
                        key={i} 
                        seasonNumber={seasonNumber} 
                        episodeNumber={episodeNumber}
                        reference={reference} 
                        i={i}
                      />
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </section>
  );
}


export default NewReferencesDisplay;



/*
  

*/


