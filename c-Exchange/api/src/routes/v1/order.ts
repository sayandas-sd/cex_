import { Router } from "express";
import { RedisManager } from "../../RedisManager";
import { ActionType } from "../../types/status";


export const orderRouter = Router();

orderRouter.post("/", async (req, res) => {
    const { market, price, quantity, side, userId } = req.body;

    console.log({ market, price, quantity, side, userId });

    const response = await RedisManager.getInstance().sendAndAwait({
        type: ActionType.CREATE_ORDER,
        data: {
            market,
            price,
            quantity,
            side,
            userId,
        }
    });

    res.status(200).json(response.payload)
})


orderRouter.delete("/", async (req, res) => {
    const { orderId, market } = req.body;

    const response = await RedisManager.getInstance().sendAndAwait({
        type: ActionType.CANCEL_ORDER,
        data: {
            orderId, 
            market
        }
    })

    res.json(response.payload);
}) 

orderRouter.get("/", async (req, res) => {

    const response = await RedisManager.getInstance().sendAndAwait({
        type: ActionType.OPEN_ORDER,
        data: {
            userId: req.query.userId as string,
            market: req.query.market as string
        }
    })

    res.json(response.payload);
})