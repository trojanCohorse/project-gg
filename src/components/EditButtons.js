import { Fragment } from "react";

const EditButtons = ({ setIsEditable, isEditable, confirmChanges }) => {
  return (
    <Fragment>
      <button onClick={confirmChanges}>Confirm</button>
      <button onClick={() => setIsEditable(!isEditable)}>Cancel</button>
    </Fragment>
  );
};

export default EditButtons;