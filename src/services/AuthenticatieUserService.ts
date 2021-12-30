import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string;
    password: string;
}


class AuthenticatieUserService {
    async execute( {email, password}: IAuthenticateRequest ){
        
        const userRepositories =  getCustomRepository(UserRepositories);
        
        // Verificar se email existe
        const user = await userRepositories.findOne({
            email   
        });

        if(!user){
            throw new Error("Email/Password incorrect");            
        }
        // Verificar se a senha esta correta

        const passwordMath = await compare(password,  user.password)

        if(!passwordMath){
            throw new Error("Email/Password incorrect");      
        }
        // Gera o Token

        const token = sign({
            email: user.email
        }, "c6e05010096e21264fc675777ec80eb0",{
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export {AuthenticatieUserService}