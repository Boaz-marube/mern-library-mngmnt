import { Express, Request, Response } from "express"; 
import authRoute from './AuthRoute'

export function registerRoutes(app:Express){

    app.get("/health", (req:Request, res:Response)=>{
        res.status(200).json({message:"Server is running fine"});
    })
    
    app.use('/auth',authRoute); 
}