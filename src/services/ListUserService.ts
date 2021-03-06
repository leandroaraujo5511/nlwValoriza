import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { classToPlain} from "class-transformer"


class ListUserService {
    async execute(){
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.find();

        return classToPlain(user) ;
    }   
}

export {ListUserService}