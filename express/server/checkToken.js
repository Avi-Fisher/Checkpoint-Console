import jwt from "jsonwebtoken"
import "dotenv/config"

export function checkToken(headers){
    const token = headers.authorization.split(' ')[1]

    console.log(token);
    if(!token){
        log(token)
        return ""
    }

    const decodedToken = 
        jwt.verify(token, process.env.SECRET);

    console.log(decodedToken);
    
}