import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if(!user) {
            return res.status(400).json({error: "User/Password incorrect!"})
        }

        const passwordMatch = await compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(400).json({ error: "User/Password incorrect"})
        }

        const token = sign(
        {
            name: user.name,
            email: user.email
        },
        "eu_nao_tenho_uma_arma_kurt",
        {
            subject: user.id,
            expiresIn: "30d"
        }
        );
        
        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        })
    }
}