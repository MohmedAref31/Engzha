import { Router } from "express";
import { UserController } from "../controllers/userController";


export class UserRoute {
    private router : Router;
    constructor(public readonly userController: UserController) {
        this.router = Router();
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

    private get Router(){
        return this.router;
    }
}