import { IUserRepository } from "../interfaces/User/IUserRepository";
import { IUserService } from "../interfaces/User/IUserService";




// all business logic handle in here 
export class UserService implements IUserService{
    // use depencie injection
    constructor(public readonly userRepostry: IUserRepository){
    }

    async create(user: any): Promise<any> {
        return this.userRepostry.create(user);
    }


    async findByEmail(email: string): Promise<any> {
        return this.userRepostry.findByEmail(email);
    }

    async findById(id: number): Promise<any> {
        return this.userRepostry.findById(id);
    }

    async update(id: number, data: any): Promise<any> {
        return this.userRepostry.update(id, data);
    }

    async delete(id: number): Promise<boolean> {
        return this.userRepostry.delete(id);
    }

    async findAll(): Promise<any> {
        return this.userRepostry.findAll();
    }

}
