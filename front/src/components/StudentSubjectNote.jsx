import PropTypes from 'prop-types';
import "../App.css";


export const StudentSubjectNote = (fistName, lastName, note, showNotes) => {
  let arr = Object.entries(note)
  return (
    <>
    <button onClick={showNotes}>
    <div className='studentCont'>
      <h3>{fistName} {lastName}</h3>
      <p>{[...arr]}</p>
    </div>
    </button>
    </>
  )
}

StudentSubjectNote.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  noteValue: PropTypes.number.isRequired
};

