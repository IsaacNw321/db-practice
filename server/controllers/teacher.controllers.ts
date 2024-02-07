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
    const teacher = await prisma.teacher.findUnique({
       where: {
        id : id
       }
    })
    if (!teacher)  res.status(404).json({message : "There is no Teacher with that id"})
    res.json(teacher);
  } catch (error) {
    res.status(500).json({message: error})
  }
}


export const createTeacher = async (req: Request , res : Response ) =>{
  const {firstName , lastName, subject, id} = req.body;
  try {
    const newTeacher = await prisma.teacher.create({
      data : {
        id : id,
        firstName: firstName,
        lastName: lastName,
        subject: subject,
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
  const {firstName , lastName, subject} = req.body;
  try {
    const updateTeacher = await prisma.teacher
    .findUnique({ where: { id: id } })
    if(updateTeacher){
    updateTeacher.firstName = firstName;
    updateTeacher.lastName = lastName;
    updateTeacher.subject = subject;
    }
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



