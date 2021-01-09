import postRefToDb from './referencePost.js';

const AuthButtons = ({ reference, seasonNumber, episodeNumber, i, setIsEditable, isEditable }) => {

    const { subject, timestamp, quote, speaker, context, meaning } = reference;

    return (
        <div>
            <button onClick={() => postRefToDb(subject, timestamp, quote, speaker, context, meaning, seasonNumber, episodeNumber, i)}>Approve</button>
            <button onClick={() => setIsEditable(!isEditable)}>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default AuthButtons;