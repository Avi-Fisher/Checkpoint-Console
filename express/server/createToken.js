import jwt from "jsonwebtoken"
import "dotenv/config"
import data from "../db/db.js"



export function createToken(user, password) {

    const findUser = data.find(e =>
        e.name == user && e.password == password)

    if (findUser) {
        const token = jwt.sign(
            {
                userId: user,
                password: password
            },
            process.env.SECRET,
            { expiresIn: "1h" }
        )
        return token
    }
    else {
        return ("user not found")
    }
}



