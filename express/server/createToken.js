import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import data from "../db/db.js"

function createToken(user, password) {

    let findUser = data.find(e => 
        e.name == user && e.password == password)

    if (findUser) {
        const token = jwt.sign(
            {
                userId: user,
                password: password
            },
            "dsfdfasdf",
            { expiresIn: "1h" }
        )
        return token
    }
    else {
        return ("sdf")
    }
}

console.log(createToken("a", "a"));
// console.log(process.env.SECRET);

