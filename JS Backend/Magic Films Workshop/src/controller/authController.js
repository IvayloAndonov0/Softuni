import { Router } from "express";


const authController = Router();

authController.get(`/register`,(req,res)=>{
    res.render(`auth/register`)
});

authController.post(`/register`, async (req,res)=>{
    const userData = req.body;
});




export default authController;