import { useState,useEffect } from 'react'
import './App.css'
import { getTeachers } from './utils/teachers';
import TeacherCard from './components/teacherCard';
import { getTeacherStudentsNote } from './utils/teachers';
const handleTeacherClick = async (id, subject) => {
  const data = await getTeacherStudentsNote(id, subject);
  console.log(data);
};

function App() {
  const [teachers, setTeachers] = useState([]);
 
  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await getTeachers();
      setTeachers(data);
    };
    fetchTeachers();
  }, []);
  return (
    <>
      <div>
        <div>
          <div>
            {
              !teachers
                ? <h2>there is no data</h2>
                :
            teachers.map((teacher, index) => (
              <TeacherCard
                key={index}
                id={teacher.id}
                firstName={teacher.firstName}
                lastName={teacher.lastName}
                subjects={teacher.subjects}
                onSubjectClick={handleTeacherClick}
              />  
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
