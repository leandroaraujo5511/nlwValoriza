import {Request, Response} from  "express";
import { ListUserReceiveComplemtsService } from "../services/ListUserReceiveComplemtsService";



class ListUserReceiveComplimentControlle {
    async handle( request:Request, response:Response ){
        const {user_id} = request

        const ListUserReceiveComplimentControlle = new ListUserReceiveComplemtsService();

        const compliment =  await ListUserReceiveComplimentControlle.execute(user_id);

        return response.json(compliment);
    }
}

export {ListUserReceiveComplimentControlle}