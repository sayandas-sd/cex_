import { Router } from "express";
import { RedisManager } from "../../RedisManager";
import { ActionType } from "../../types/status";


export const depthRouter = Router();

depthRouter.get("/", async (req, res) => {
    const { symbol } = req.query;

    const response = await RedisManager.getInstance().sendAndAwait({
        type: ActionType.GET_DEPTH,
        data: {
            market: symbol as string,
        }
    });
    res.json(response.payload);

})