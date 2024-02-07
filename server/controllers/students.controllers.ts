import { prisma } from "../lib/prisma";

export const getStudent = async ({req , res} : any ) => {
  const {id} = req.params;
  try {
    const student = await prisma.student
    .findUnique({where : {id : id }})
    student
      ? res.status(200).json(student)
      : res.status(404).json({message : "not found"})
  } catch (error) {
    res.status(500).json({message : error })
  }
} 

export const getStudents = async ({req , res} : any) => {
  try {
    const students = await prisma.student.findMany()
    if(students.length <= 0){
      res.status(404).json({message : "not found"})
    }
    if(students.length > 0){
      res.status(200).json(students);
    }
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const createStudent = async ({req, res} : any) => {
  const {firstName, lastName} = req.body;
  try {
    const newStudent = await prisma.student.create({
      data :{
        fistName : firstName,
        lastName : lastName
      }
    })
    newStudent
      ? res.status(200).json({message : "created"})
      : res.status(400).json({message : "not created"})
  } catch (error) {
    res.status(500).json({message : error })
  }
}

export const updatedStudent = async ({req, res } : any) => {
  const {id } = req.params;
  const {firstName, lastName} = req.body;
  try {
    const updatedStudent = await prisma.student.findUnique({ where : {id : id}})
    if(updatedStudent){
      updatedStudent.fistName = firstName;
      updatedStudent.lastName = lastName;
      res.status(200).json(updatedStudent)
    }else{
      res.status(400).json({message : "not updated"})
    }  
  } catch (error) {
    
  }
}

export const deleteStudent = async ({req, res} : any) =>{
  const {id} = req.params;
  try {
    const deletedStudent = await prisma.student
    .findUnique({where : {id:id}})
    deletedStudent
      ? res.status(200).json({message : "deleted"})
      : res.status(404).json({message : "not found it"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}