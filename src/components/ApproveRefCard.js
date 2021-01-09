import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import postRefToDb from './referencePost.js';


const upArrow = <FontAwesomeIcon icon={faCaretUp} />;
const downArrow = <FontAwesomeIcon icon={faCaretDown} />;

const ApproveRefCard = ({ reference, seasonNumber, episodeNumber, i }) => {
  const { user, isAuthenticated } = useAuth0();
  // state for expanding the quote, context, and meaning paragraphs for when they exceed a certain character limit
  const [readMore, setReadMore] = useState({
    quote: false, 
    context: false, 
    meaning: false
  });

  const handleReadMore = (e) => {
    const newReadMore = readMore;
    newReadMore[e.target.value] = !readMore[e.target.value];
    setReadMore({
      ...newReadMore
    });
  }

  return (
    <article className="episodeRef">
      <div className="entryLine">
        <h5>Subject:</h5>
        <p className="scroll">{reference.subject}</p>
      </div>
      <div className="entryLine">
        <h5>Time Stamp:</h5>
        <p>{reference.timestamp}</p>
      </div>
      <div className="entryLine">
        <h5 className={readMore.quote ? "largeText" : ""}>Quote:</h5>
        <p className={readMore.quote ? "largeText" : "scroll"}>{reference.quote}</p>
        <button
          className="readMore"
          value="quote"
          onClick={handleReadMore}
        >{readMore.quote ? downArrow : upArrow}</button>
      </div>
      <div className="entryLine">
        <h5>Speaker:</h5>
        <p className="scroll">{reference.speaker}</p>
      </div>
      <div className="entryLine">
        <h5 className={readMore.context ? "largeText" : ""}>Context:</h5>
        <p className={readMore.context ? "largeText" : "scroll"}>{reference.context}</p>
        <button 
          className="readMore" 
          value="context"
          onClick={handleReadMore}
        >{readMore.context ? downArrow : upArrow}</button>
      </div>
      <div className="entryLine">
        <h5 className={readMore.meaning ? "largeText" : ""}>Meaning:</h5>
        <p className={readMore.meaning ? "largeText" : "scroll"}>{reference.meaning}</p>
        <button 
          className="readMore" 
          value="meaning"
          onClick={handleReadMore}
        >{readMore.meaning ? downArrow : upArrow}</button>
      </div>
      {(isAuthenticated && (user.sub === 'auth0|5ff1e3bfe00a83006e89c066' || user.sub === 'google-oauth2|114200838558211120591' || user.sub === 'google-oauth2|109142349949295009924' || user.sub === 'google-oauth2|105943216189762454578')) ? <button onClick={ () => postRefToDb(reference.subject, reference.timestamp, reference.quote, reference.speaker, reference.context, reference.meaning, seasonNumber, episodeNumber, i) }>Approve</button> : null}
    </article>
  )
}

export default ApproveRefCard;