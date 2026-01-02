import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class DetailUserController {
    async handle(req: Request, res: Response) {
        const user_id = (req as any).user_id;

        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return res.json(user)
    }
}