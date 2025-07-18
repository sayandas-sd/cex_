import { Router } from "express";
import { orderbookRouter } from "./v1/order";
import { depthRouter } from "./v1/depth";
import { tickerRouter } from "./v1/ticker";
import { tardeRouter } from "./v1/trades";
import { klineRouter } from "./v1/kline";

export const router = Router();


router.use("/order", orderbookRouter);
router.use("/depth", depthRouter);
router.use("/tickers", tickerRouter);
router.use("/trades", tardeRouter);
router.use("/klines", klineRouter);