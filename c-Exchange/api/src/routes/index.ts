import { Router } from "express";
import { orderbookRouter } from "./v1/orderbook";
import { depthRouter } from "./v1/depth";
import { tickerRouter } from "./v1/ticker";
import { tardeRouter } from "./v1/trades";


export const router = Router();


router.use("/orderbook", orderbookRouter);
router.use("/depth", depthRouter);
router.use("/tickers", tickerRouter);
router.use("/trades", tardeRouter);