import { Link } from 'react-router-dom';

const Season = ({ season }) => {
  return (
    <section className="seasonDisplay">
      <ul className="episodeList wrapper">
        {
          typeof season !== 'undefined' && (
            season[0].episodes.map((episode) => {
              const { episodeNumber, name, overallNumber, references, seasonNumber } = episode;
              return (
                <li key={episodeNumber} className="episodeCard">
                  <div>
                    <h3>{name}</h3>
                    <h4> Episode {episodeNumber}</h4>
                  </div>
                  <p>Image Goes Here</p>
                  <Link to={`/season/${seasonNumber}/episode/${episodeNumber}`} >See References</Link>
                </li>
              )
            })
          )
        }
      </ul>
    </section>
  )
}

export default Season;