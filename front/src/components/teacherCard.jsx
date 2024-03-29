import PropTypes from 'prop-types';
import { useState } from 'react';
import { getTeacherStudentsNote } from '../utils/teachers';



const TeacherCard = ({ id, firstName, lastName,subjects }) => {
 
  const [showNotes, setShowNotes] = useState(null);
  const [subjectnotes, setSubjectNotes] = useState([]);

  const handleSubjectClick = async (id, subject) => {
    const subjectnotes = await getTeacherStudentsNote(id, subject);
    setSubjectNotes(subjectnotes);
    console.log(subjectnotes);
    return subjectnotes;
  };

  return (
    <div className={"cardCont"}>
      <h2>
        {firstName}
        <br />
        {lastName}
      </h2>
      <div className="subjects">
        <h3>Subjects</h3>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} onClick={() => {
              handleSubjectClick(id, subject.subjectName);
              setShowNotes(showNotes === index ? null : index);
              }}>
              {subject.subjectName}
             {showNotes=== index && 
             (
               subjectnotes.map((student,index) => (
              <li key={index} className="studentNote">
                {student.fistName}
                {student.lastName}
                {student.note.map((note, index) => (
                  <p key={index}>{note.noteValue}</p>
                ))}
              </li>
             )))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TeacherCard.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstNameS: PropTypes.string.isRequired,
  subjectName : PropTypes.string.isRequired,
  lastNameS: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
  onSubjectClick: PropTypes.func.isRequired,
};

export default TeacherCard;