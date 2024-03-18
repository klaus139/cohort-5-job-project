import express from "express";

const authRouter = express.Router();

authRouter.get('/test', (req, res) => {
    console.log('we got here')
})




export default authRouter;