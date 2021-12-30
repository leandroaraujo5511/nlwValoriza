import {Request, Response} from  "express";
import { ListUserSendComplemtsService } from "../services/ListUserSendComplemtsService";



class ListUserSendComplimentControlle {
    async handle( request:Request, response:Response ){
        const {user_id} = request        

        const listUserSendComplemtsService = new ListUserSendComplemtsService();

        const compliment =  await listUserSendComplemtsService.execute(user_id);
        
        return response.json(compliment);
    }
}

export {ListUserSendComplimentControlle}