import { App } from "./app";
import { UserRepostry } from "./Application/repositories/userRepository";
import { UserService } from "./Application/services/userService";
import { UserController } from "./Presentation/controllers/userController";
import { UserRoute } from "./Presentation/routes/userRoute";



// const userRepostry = new UserRepostry();
// const userService = new UserService(userRepostry);

// const userController = new UserController(userService);

const userRoute = new UserRoute();




// const userRoute = new UserService(new UserController(new UserService(new UserRepostry())));


const app = new App([userRoute]); 

app.listen()


