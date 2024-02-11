import PropTypes from 'prop-types';



const TeacherCard = ({ firstName, lastName, students, subjects }) => {
  return (
    <div className="cardCont">
      <h2>{firstName} {lastName}</h2>
      <h3>Students</h3>
      <ul>
        {students.map((student, index) => <li 
          key={index}>
            {student.fistName}
            {student.lastName}
            </li>)}
      </ul>
      <h3>Subjects</h3>
      <ul>
        {subjects.map((subject, index) => <li 
          key={index}>
          {subject.subjectName}
          </li>)}
      </ul>
    </div>
  );
};
TeacherCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
};

export default TeacherCard;