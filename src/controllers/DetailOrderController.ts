import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DetailOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const orders = await prisma.orderItem.findMany({
            where: {
                order_id: order_id
            },
            include:{
                product: true,
                order: true
            }
        })
        return res.json(orders);
    }
}