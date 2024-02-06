import express from "express";
import logger from "morgan"; 
import {createServer} from "node:http";

const Port = process.env.PORT ?? 3000;
const app = express();
const server = createServer(app);
app.use(logger("dev"))
server.listen(Port, ()=> {
  console.log(`Connected to Port ${Port}`)
})