import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiveComplemtsService {
    async execute(user_id:string){
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);

        const compliment = complimentRepositories.find({
            where:{
                user_receiver : user_id
            }, 
            relations: ["userSend","userReceive","Tag"],
        });

        return compliment;
    }



}

export {ListUserReceiveComplemtsService}