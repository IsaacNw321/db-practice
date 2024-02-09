import { prisma } from "../lib/prisma";
import { Request, Response } from "express";
import { Subject } from "@prisma/client";

export const getSubjects = async (_: Request, res: Response) => {
  try {
    const subjects = await prisma.subject.findMany()
    subjects
     ? res.status(200).json(subjects)
     : res.status(404).json({message: "there is no subjects"})
  } catch (error) {
   res.status(500).json({message : error}) 
  }
}

export const createSubject = async (req: Request, res: Response) =>{
  const {subjectName} = req.body;
  try {
    const newSubject  = await prisma.subject.create({
      data : {
        subjectName : subjectName
      }  
    }) as Subject
    newSubject
      ? res.status(200).json({message : "created"})
      : res.status(400).json({message : "not created" })
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const updateSubject = async (req: Request, res : Response) => {
  const {id} = req.params;
  const {subjectName} = req.body;
  try {
    const updatedSubject = await prisma.subject.update({
      where : {
        id : id
      },
      data : {
        subjectName : subjectName
      }
    })
    updatedSubject
      ? res.status(200).json({message : "updated"})
      : res.status(404).json({message : "not updated"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

export const deleteSubject = async (req: Request, res:Response) => {
  const {id} = req.params;
  try {
    const deletedSubject = await prisma.subject.delete({
      where : {
        id : id
      }
    })
    deletedSubject
      ? res.status(200).json({message : "deleted"})
      : res.status(404).json({message : "There is no subject with that id"})
  } catch (error) {
    res.status(500).json({message : error})
  }
}

