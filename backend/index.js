import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"
import webhookRouter from "./routes/webhook.route.js"
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from "cors"


const app = express()

app.use(cors(process.env.CLIENT_URL))
app.use(clerkMiddleware())
app.use("/webhooks", webhookRouter)

app.use(express.json())

// app.get("/auth-test", (req,res) => {
//     const authState = req.auth;
//     res.json(authState)
// })

// app.get("/protect", (req,res) => {
//     const {userId} = req.auth;
//     if(!userId) {
//         return res.status(401).json("not authenticated")
//     }
//     res.status(200).json("ok")
// })

// app.get("/protect2",requireAuth(), (req,res) => {
//     res.status(200).json("ok")
// })




app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//error handling
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        messsge:error.messsge || "Something went wrong",
        status:error.status,
        stack:error.stack,
    });
})


app.listen(3000, () => {
    connectDB()
    console.log("server is running");
})