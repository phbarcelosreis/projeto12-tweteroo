import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())

const login = [];
let tweets = [];
let avatar;

app.post("/sign-up", (req, res) => {
    const { username } = req.body;
    avatar = req.body.avatar

    if (!username || !avatar) {
        return res.status(400);
    }

    const user = {
        username,
        avatar
    }
    
    login.push(user)
    res.send(user)
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        return res.status(400);
    }

    const tweetUser = {
        username,
        tweet,
        avatar
    }

    tweets.push(tweetUser)
    res.send(tweets)

})

app.get("/tweets", (req, res) => {

    res.send(tweets)
})


app.listen(5000, () => console.log("Server running at port: 5000"))