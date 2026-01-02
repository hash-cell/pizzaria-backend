import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;

        const order = await prisma.orderItem.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount: Number(amount)
            }
        })
        return res.json(order);
    }
}