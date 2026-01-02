import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const order = await prisma.order.update({
            where:{
                id: order_id
            },
            data:{
                draft: false
            }
        })
        return res.json(order);
    }
}