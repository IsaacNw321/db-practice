import { Teacher } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { Request, Response } from "express";


export const getTeachers = async (_: Request , res : Response  ) =>{
  try{
    const teachers = await prisma.teacher.findMany()
    if(teachers.length <= 0){
        res.status(400).json({message: 'There are not teachers yet!'});
    };
    if(teachers.length > 0){
        res.status(200).json(teachers);
    };
    }catch(error){
    res.status(400).json({error: error})
    }            
}

export const getTeacher = async (req: Request , res : Response ) => {
  const {id} = req.params;
  try {
    const teacher = await prisma.teacher
    .findUnique({ where: { id : id} })
    teacher
      ? res.status(200).json(teacher)
      : res.status(404).json({message : "not found"})
  } catch (error) {
    res.status(500).json({message: error})
  }
}


export const createTeacher = async (req: Request , res : Response ) =>{
  const {firstName , lastName} = req.body;
  try {
    const newTeacher = await prisma.teacher.create({
      data : {
        firstName: firstName,
        lastName: lastName,
      } as Teacher
    })
    newTeacher
      ? res.status(200).json({message: "created"})
      : res.status(400).json({message: "not created"})
  } catch (error) {
    res.status(401).json({error: error})
  }
}

export const updateTeacher = async (req: Request , res : Response ) => {
  const {id} = req.params;
  const {firstName , lastName} = req.body;
  try {
    const updateTeacher = await prisma.teacher
    .update
    ({ where : {id : id},
    data : {
      firstName : firstName,
      lastName : lastName,
    }, }) as Teacher
    updateTeacher
      ? res.status(200).json({message : "updated"})
      : res.status(404).json({message : "not found"})
  } catch (error) {
    res.status(401).json({message: error})
  }
}

export const deleteTeacher = async (req: Request , res : Response ) =>{
  const {id} = req.params;
  try {
    const deletedTeacher = await prisma.teacher.delete({
      where : {
        id : id
      }
    })
    deletedTeacher
      ? res.status(200).json({message : "deleted"})
      : res.status(404).json({message : "teacher not found"})
  } catch (error) {
    res.status(401).json({message : error})
  }
}

export const getStudentsTeacher = async (req : Request, res: Response)=>{
  const {id} = req.params;
  try {
    const students = await prisma.student.findMany({
      where : {
        teacher :{
          some : {
            id: id
          }
        }
      }
    })
    students
      ? res.status(200).json(students)
      : res.status(404).json({message : "Not found"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const getSubjectsTeacher = async (req : Request, res :Response) => {
  const {id} = req.params;
  try {
    const subjects = await prisma.subject.findMany({
      where : {
        teacher : {
          some : {
            id : id
          }
        }
      }
    })
    subjects
      ? res.status(200).json(subjects)
      : res.status(404).json("not found")
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const getStudentsNoteSubjectTeacher = async (req : Request, res: Response) => {
  const {id, subject} = req.params;
  try {
    const noteSubjectStudents = await prisma.student.findMany({
      where :{
        subjects : {
           some :{
            subjectName : subject
           }
        },
        teacher : {
          some : {
            id : id
          }
        } 
      },
      include : {
        note: {
          where : {
            subject : {
              subjectName : subject
            },
          },
          select : {
            noteValue : true
          }
        }
      }
    })
    noteSubjectStudents
      ? res.status(200).json(noteSubjectStudents)
      : res.status(404).json("not found")
  } catch (error) {
    res.status(500).json({message : error})
  }
}
