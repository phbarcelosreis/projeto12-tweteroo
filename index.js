import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())

const login = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;

    if(!username || !avatar){
        return res.status(400);
    }

    const user = {
        username,
        avatar
    }

    login.push(user)
    res.send(user)
})

app.get("/sign-up", (req, res) => {

    res.send(login)

})

app.listen(5000, () => console.log("Server running at port: 5000"))