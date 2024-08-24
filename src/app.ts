import express, { Application } from "express";
import { errorHandler } from "./adapters/middlewares/errorHandler.middleware";
import { HTTP400Error } from "./helpers/ApiError";
import { EHttpStatusCode } from "./interfaces/enums/EHttpStatusCode";


export class App {
    public port : number ;
    public app : Application
    constructor(port : number){
        this.app = express()
        this.port = port;
        this.initializeDbConnection()
        this.initialzeMiddlewares()
        this.initializeRoutes()
        this.initializeErrorHandler()
    }

   private initializeDbConnection(){

    }

 private initialzeMiddlewares(){}

 private initializeRoutes(){
    this.app.get('/api', (req, res, next)=>{
        next(new HTTP400Error("this is bad request"))
    })
 }

 private initializeErrorHandler() : void {
    this.app.use(errorHandler)
 }

 public listen() : void {
    this.app.listen(this.port, ()=>{
        console.log(`Server is running on port ${this.port}`); 
    })
 }

}