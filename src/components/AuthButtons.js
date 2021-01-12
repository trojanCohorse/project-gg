import postRefToDb from './referencePost.js';
import EditButtons from './EditButtons';

const AuthButtons = ({ reference, seasonNumber, episodeNumber, i, setIsEditable, isEditable, confirmChanges }) => {

  const { subject, timestamp, quote, speaker, context, meaning } = reference;

  return (
    <div className="authButtons">
      <button onClick={() => postRefToDb(subject, timestamp, quote, speaker, context, meaning, seasonNumber, episodeNumber, i)}>Approve</button>
      <button onClick={() => setIsEditable(!isEditable)}>Edit</button>
      <button>Delete</button>
      {
        isEditable
        ?
        <EditButtons
          setIsEditable={setIsEditable}
          isEditable={isEditable}
          confirmChanges={confirmChanges}
        />
        :
        ""
      }
    </div>
  )
}

export default AuthButtons;