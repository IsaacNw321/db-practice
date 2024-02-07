import express from "express";
import logger from "morgan"; 
import {createServer} from "node:http";
import teacherRoutes from "./routes/teachers.routes.ts"
import studentsRoutes from "./routes/students.routes.ts"
const Port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app);

app.use(logger("dev"))
app.use(express.json());
app.use("/api", teacherRoutes);
app.use("/api",studentsRoutes);

server.listen(Port, ()=> {
  console.log(`Connected to Port ${Port}`)
})