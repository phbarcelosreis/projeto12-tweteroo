import express from "express";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())

const login = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

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
        tweet
    }

    tweets.push(tweetUser)
    res.send(tweets)
    for(let i = 0; i < tweets.length; i++) {
        tweets[i].avatar = login[0].avatar
    }
})

app.get("/tweets", (req, res) => {

    console.log(tweets)
    res.send(tweets)
})


app.listen(5000, () => console.log("Server running at port: 5000"))