import { Request, Response } from "express";

export default function getHealth(request: Request, response: Response) {
  response.status(200).json({
    status: "Success",
    message: "Health Ok!!",
  });
}
