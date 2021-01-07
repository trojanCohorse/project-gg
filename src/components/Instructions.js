import { Link } from 'react-router-dom'

const Instructions = () => {
  return (
    <section className="instructionsMainContainer">
      <h2>Welcome to Stars Hollow, Residents</h2>
      <h3 className="wrapper">Is Lorelai talking a mile a minute again? References going over your head? Let this API be the Sookie to your Lorelai, whipping up references and meanings fresher than Jackson's vegetables!</h3>
      {/* Grid Container Below gtc: 1fr 1fr, gcg: 50px  */}
      <section className="instructionsListContainer wrapper">
        {/* Grid items, margin: 0, list-style: none */}
        <ul className="instructionsLists">
          <li className="instructionsListItems">
            <p>Find references. We got Kirk to sort them chronologically.</p>
          </li>
          <li className="instructionsListItems">
            <p>Post your own references. A diehard gilmore girls fan will approve the reference.</p>
          </li>
          <li className="instructionsListItems">
            <p>Find Episodes by all seasons. We got you covered.</p>
          </li>
        </ul>
        <ul className="instructionsLists">
          <li className="instructionsListItems">
            <p>Learn the context and the meaning of every Gilmore Girl reference... ever.</p>
          </li>
          <li className="instructionsListItems">
            <p>Have a better idea of what the heck Lorelai is talking about? Make it right by posting in our form <Link to='/input'>here</Link></p>
          </li>
          <li className="instructionsListItems">
            <p>Find screenshots of when the references are said via timestamps!</p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Instructions
