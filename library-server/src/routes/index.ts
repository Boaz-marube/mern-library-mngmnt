import { Express, Request, Response } from "express"; 
import authRoute from './AuthRoute'

export function registerRoutes(app:Express){
    app.use('/auth',authRoute); 
}