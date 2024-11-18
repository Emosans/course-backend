import { Request,Response } from "express";
import { User } from "../models/User";

export const registerUser = async(req:Request, res:Response)=>{
    const {name,email,password,role} = req.body;

    try{
        const user = await User.create({name,email,password,role});
        res.status(201).json({user});
    } catch(error){
        res.status(500).json(error)
    }
}