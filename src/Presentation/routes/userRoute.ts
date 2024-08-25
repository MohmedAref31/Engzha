import { Router } from "express";
import { UserController } from "../controllers/userController";
import { container } from "tsyringe";


export class UserRoute {
    public router : Router;
    public  userController: UserController
    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.routes(this.router);
    }


    public routes(app: Router){
        app.route('/user')
        .post(this.userController.createUser.bind(this.userController))
        .get(this.userController.getUsers.bind(this.userController));

        app.route('/user/:id')
        .get( this.userController.getUser.bind(this.userController))
        .put( this.userController.updateUser.bind(this.userController))
        .delete( this.userController.deleteUser.bind(this.userController));
    }

    // public getRouter(){
    //     return this.router;
    // }
}




