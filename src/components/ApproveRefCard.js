import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import AuthButtons from "./AuthButtons.js";
import ContentEditable from 'react-contenteditable';
import axios from 'axios';
import NewReferencesDisplay from './NewReferencesDisplay.js';

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
  // allow edits to the content of the card
  const [isEditable, setIsEditable] = useState(false);
  // state for upvote buttons
  const [votes, setVotes] = useState(reference.votes);
  const [refObj, setRefObj] = useState(reference);
  const [newRefObj, setNewRefObj] = useState({});

  const handleReadMore = (e) => {
    const newReadMore = readMore;
    newReadMore[e.target.value] = !readMore[e.target.value];
    setReadMore({
      ...newReadMore
    });
  }

  const handleVote = () => {
    if (reference.votes + 1 === votes) {
      setVotes(votes - 1);
    } else {
      setVotes(votes + 1);
    }
  }

  const handleRefChange = (e, name) => {
    console.log(e);
    if (!newRefObj[name]) {
      const newObj = refObj;
      newObj[name] = e.target.value;
      setNewRefObj(newObj);
      console.log(newObj);
    } else {
      const newObj = newRefObj;
      newObj[name] = e.target.value;
      console.log(newObj);
      setNewRefObj(newObj);
    }
  }

  const confirmChanges = () => {
    const toSet = newRefObj;
    console.log(toSet);
    console.log()
    setRefObj(toSet);
    setNewRefObj({});
    setIsEditable(false);
    axios({
      method: 'PUT',
      url: `https://project-gg.herokuapp.com/seasons/approve/${seasonNumber}/${episodeNumber}`,
      data: { 
        references: toSet
      }
    })
  }

  // className={"scroll", isEditable ? "edit" : ""}
  //         contentEditable={isEditable}
  //         {reference.subject}

  return (
    <article className="episodeRef">
      <div className="entryLine">
        <h5>Subject:</h5>
        <ContentEditable 
          html={refObj.subject}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'subject')}
        />
      </div>
      <div className="entryLine">
        <h5>Time Stamp:</h5>
        <ContentEditable 
          html={refObj.timestamp}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'timestamp')}
        />
      </div>
      <div className="entryLine">
        <h5 className={readMore.quote ? "largeText" : ""}>Quote:</h5>
        <ContentEditable 
          html={refObj.quote}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'quote')}
        />
        <button
          className="readMore"
          value="quote"
          onClick={handleReadMore}
        >{readMore.quote ? downArrow : upArrow}</button>
      </div>
      <div className="entryLine">
        <h5>Speaker:</h5>
        <ContentEditable 
          html={refObj.speaker}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'speaker')}
        />
      </div>
      <div className="entryLine">
        <h5 className={readMore.context ? "largeText" : ""}>Context:</h5>
        <ContentEditable 
          html={refObj.context}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'context')}
        />
        <button 
          className="readMore" 
          value="context"
          onClick={handleReadMore}
        >{readMore.context ? downArrow : upArrow}</button>
      </div>
      <div className="entryLine">
        <h5 className={readMore.meaning ? "largeText" : ""}>Meaning:</h5>
        <ContentEditable 
          html={refObj.meaning}
          disabled={!isEditable}
          tagName='p'
          className={isEditable ? "edit" : ""}
          onChange={(e) => handleRefChange(e, 'meaning')}
        />
        <button 
          className="readMore" 
          value="meaning"
          onClick={handleReadMore}
        >{readMore.meaning ? downArrow : upArrow}</button>
      </div>
      {/* {
        (isAuthenticated && (user.sub === 'auth0|5ff1e3bfe00a83006e89c066' || user.sub === 'google-oauth2|114200838558211120591' || user.sub === 'google-oauth2|109142349949295009924' || user.sub === 'google-oauth2|105943216189762454578'))
        ? */}
          <AuthButtons
            key={i}
            seasonNumber={seasonNumber}
            episodeNumber={episodeNumber}
            reference={reference}
            i={i}
            setIsEditable={setIsEditable}
            isEditable={isEditable}
            confirmChanges={confirmChanges}
          />
        {/* :
          null
      } */}
      <section className="voteButtons">
        <button name="upvote" onClick={handleVote} >
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        {votes && (
          votes
        )}
        <button name="downvote" onClick={handleVote} >
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
      </section>
    </article>
  )
}

export default ApproveRefCard;