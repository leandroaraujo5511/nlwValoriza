import { Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken'; 


interface IPayLoad{
    sub:string;
}

export function ensureAutheticated(
    request: Request,
    response: Response, 
    next: NextFunction
) {
    // Receber tokem
    const AuthToken = request.headers.authorization

    const [,token] = AuthToken.split(" ")
    // Validar se token esta preenchido
    if(!AuthToken){
        return response.status(401).end();
    }
    try {
        // Validar se o token é valido
        const {sub} = verify(token,"c6e05010096e21264fc675777ec80eb0") as IPayLoad;
        
        request.user_id = sub;
        
        return next();
    } catch (err) {
        return response.status(401).end();
    }

    // Recuperar informação do usuário
}