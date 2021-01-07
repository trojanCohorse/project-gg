// import { useState, useEffect } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sortTimestamps } from './sortFunctions';
// import axios from 'axios';

const Episode = (props) => { 
  
  const { episodeNum } = useParams();
  const [result, setResult] = useState(0);
  const [episodeResult, setEpisodeResult] = useState(0);
  const [image, setImage] = useState([]);
  const [sortedEpisodes, setSortedEpisodes] = useState([]);

  useEffect(() => {
    props.changeEpisodeNum(episodeNum);
    setResult(5);
  }, []);

  useEffect(() => {
    if (result !== 0) {
      props.getEpisode().then((res) => {
        setEpisodeResult(res)
      });
    }
  }, [result]);
  
  // url: `https://api.themoviedb.org/3/tv/4586/season/${episodeResult.seasonNumber}/episode/${episodeNum}?api_key=cd7b67374269e15777a55aee45332dab`
  // https://api.themoviedb.org/3/tv/4586/season/1/episode/4?api_key=cd7b67374269e15777a55aee45332dab
  useEffect(() => {
    const seasonNum = episodeResult.seasonNumber; 

    if (episodeResult) {
      axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/4586/season/${seasonNum}/episode/${episodeNum}?api_key=cd7b67374269e15777a55aee45332dab`
      }).then(res => {
        const newImage = 'https://image.tmdb.org/t/p/original' + res.data.still_path;
        setImage(newImage);
      }).catch(err => console.log('err: ', err));
    }
  }, [episodeResult])

  useEffect(() => {
    if (episodeResult !== 0) setSortedEpisodes(sortTimestamps(episodeResult.references));
  }, [episodeResult])

  return (
    <section className="episodeInfo">
      {episodeResult && (
        <div className="wrapper">
          <h3>{episodeResult.name}</h3>
          <img src={image} alt="image of show" />
          {
            episodeResult.references.length > 0 && (
              <section className="references episodeContainer">
                {
                  episodeResult.references.map(reference => {
                    return (
                      <article key={reference.id} className="episodeRef">
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
                      </article>
                    )
                  })
                }
              </section>
            )
          }
        </div>
      )}
    </section>
  )
}

export default Episode;