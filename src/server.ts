import "dotenv/config";
import { App } from "./app";

const port : number = process.env.PORT ? +process.env.PORT :   8000 ;



const app = new App(port); 

app.listen()


