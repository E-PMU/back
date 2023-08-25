import { UserRepository } from "../repositories/User";

export class UserService {

    static async login(username: string, password: string){
        return await UserRepository.login(username, password);
    }
}