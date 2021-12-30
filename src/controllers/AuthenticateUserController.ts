import {Request, Response} from "express"
import { AuthenticatieUserService } from "../services/AuthenticatieUserService";




class AuthenticateUserController {
    
    async handle(request:Request, response: Response){
        const {email, password} =  request.body;

        const authenticatieUserService = new AuthenticatieUserService();

        const token = await authenticatieUserService.execute({
            email, 
            password,
        });
        
        return response.json(token);
    }


}


export {AuthenticateUserController}