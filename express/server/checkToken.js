import jwt from "jsonwebtoken"
import "dotenv/config"

export function checkToken(req, res, next) {
    try {
        console.log(req.headers);
        
        const token = req.headers.authorization;
        if (!token) {
            return ""
        }
console.log(token);

        const decodedToken =
            jwt.verify(token, process.env.SECRET);

if(decodedToken){

    next()
}else{
    res.send("token expaired")
}
    } catch (error) {
        console.error(error)
    }


}