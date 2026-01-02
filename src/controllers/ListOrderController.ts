import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListOrdersController {
    async handle(req: Request, res: Response) {
        const orders = prisma.order.findMany({
            where:{
                draft: false,
                status: false,
            },
            orderBy: {
                created_at: 'desc'
            }
        })
        return res.json(orders);
    }
}