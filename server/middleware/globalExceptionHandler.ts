import { NextFunction, Request, Response } from "express";

// Middleware Function for Global Exception handling
export default function getResponse(request:Request,response:Response,next:NextFunction) {
    const originalSend = response.send
    response.send = function(body) {
        console.log('Response:', body);
        return originalSend.call(this, body);
      };
  next();
}
