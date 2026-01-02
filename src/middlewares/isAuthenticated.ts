import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }
    
    const [, token] = authToken.split(" ")

    try{
        const { sub } = verify(
            token,
             "eu_nao_tenho_uma_arma_kurt"
        ) as Payload;

        (req as any).user_id = sub;

        return next()
    } catch(err) {
        return res.status(401).end();
    }
}