import { Router } from "express";
import authService from "../services/authService.js";


const authController = Router();

authController.get(`/register`,(req,res)=>{
    res.render(`auth/register`);
});

authController.post(`/register`, async (req,res)=>{
    const userData = req.body;
    await authService.register(userData);
    res.redirect(`/`);
});
authController.get(`/login`,(req,res)=>{
    res.render(`auth/login`);
});




export default authController;