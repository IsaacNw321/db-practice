import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {StudentSubjectNote} from './StudentSubjectNote';
import { getTeacherStudentsNote } from '../utils/teachers.jsx';

const TeacherCard = ({ id, firstName, lastName,subjects, subjectName, onSubjectClick }) => {
  const [students, setStudents] = useState([]);
  const [showNotes, setShowNotes] = useState(false);
  useEffect(() => {
    const handleTeacherClick = async () => {
      if (!subjectName) {
        console.error('subjectName is undefined');
        return
      }
      const students= await getTeacherStudentsNote(id, subjectName);
      console.log(students);
      setStudents(students);
    };

    handleTeacherClick();
  },[id, subjectName]);


  return (
    <div className="cardCont">
      <h2>
        {firstName}
        <br />
        {lastName}
      </h2>
      <div className="subjects">
        <h3>Subjects</h3>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} onClick={() => onSubjectClick(id, subject.subjectName)}>
              {subject.subjectName}
            <button onClick={() => setShowNotes(!showNotes)}>
           </button>
           <div>
             {showNotes && students.map((student,index) => (
               <StudentSubjectNote
                key={index}
               firstName={student.fistName}
               lastName={student.lastName}
               noteValue={student.noteValue}
               showNotes={setShowNotes(!showNotes)}
               />
               ))}
           </div>
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