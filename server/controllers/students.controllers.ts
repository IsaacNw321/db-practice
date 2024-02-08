import { Student } from "@prisma/client";
import { prisma } from "../lib/prisma.ts";
import { Request, Response } from "express";

export const getStudent = async (req: Request , res : Response ) => {
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

export const getStudents = async (_: Request , res : Response  ) => {
  try {
    const students = await prisma.student.findMany()
    res.json(students);
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const createStudent = async (req: Request , res : Response ) => {
  const {firstName, lastName} = req.body;
  try {
    const newStudent = await prisma.student.create({
      data :{
        fistName : firstName,
        lastName : lastName
      } as Student
    })
    newStudent
      ? res.status(200).json({message : "created"})
      : res.status(400).json({message : "not created"})
  } catch (error) {
    res.status(500).json({message : error })
  }
}

export const updatedStudent = async (req: Request , res : Response ) => {
  const {id } = req.params;
  const {firstName, lastName} = req.body;
  try {
    const updatedStudent = await prisma.student
    .update
      ({ where : {id : id},
      data : {
        fistName : firstName,
        lastName : lastName,
      }, }) as Student
    updatedStudent
      ? res.status(200).json(updatedStudent)
      : res.status(400).json({message : "not updated"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const deleteStudent = async (req: Request , res : Response ) =>{
  const {id} = req.params;
  try {
    const deletedStudent = await prisma.student
    .delete({where : {id:id}})
    deletedStudent
      ? res.status(200).json({message : "deleted"})
      : res.status(404).json({message : "not found it"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const getStudentNotes = async (req: Request, res: Response) =>{
  const {id} = req.params;
  try {
    const studentnotes = await prisma.student.findUnique({
      where : {
         id : id
      },
      include : {
        note : true 
      }
    })
    studentnotes
      ? res.status(200).json(studentnotes)
      : res.status(404).json({message : "there is no student with that id"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

