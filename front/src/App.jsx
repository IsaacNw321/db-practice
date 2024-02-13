import { useState,useEffect } from 'react'
import './App.css'
import { getTeachers } from './utils/teachers';
import TeacherCard from './components/teacherCard';



function App() {
  const [teachers, setTeachers] = useState([]);
 
  useEffect(() => {
    const fetchTeachers = async () => {
      const teachers = await getTeachers();
      setTeachers(teachers);
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
                subjectName={teacher.subjectName}
              />  
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
