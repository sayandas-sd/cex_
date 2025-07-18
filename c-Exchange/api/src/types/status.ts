
export const enum OrderbookMessageType {
  DEPTH = "DEPTH",
  ORDER_PLACED = "ORDER_PLACED",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  OPEN_ORDERS = "OPEN_ORDERS",
}

export const enum ActionType {
  CREATE_ORDER = "CREATE_ORDER",
  CANCEL_ORDER = "ORDER_CANCEL",
  ON_RAMP = "ON_RAMP",
  OPEN_ORDER = "OPEN_ORDER",
  GET_DEPTH = "GET_DEPTH",
}

interface DepthPayload {
  market: string;
  bids: [string, string][];
  asks: [string, string][];
}

interface OrderPlacedPayload {
  orderId: string;
  executedQty: number;
  fills: {
    price: string;
    qty: number;
    tradeId: number;
  }[];
}

interface OrderCancelledPayload {
  orderId: string;
  executedQty: number;
  remainingQty: number;
}

interface OpenOrderPayload {
  orderId: string;
  executedQty: number;
  price: string;
  quantity: string;
  side: "buy" | "sell";
  userId: string;
}


export type MessageFromOrderbook =
  | { type: OrderbookMessageType.DEPTH; payload: DepthPayload }
  | { type: OrderbookMessageType.ORDER_PLACED; payload: OrderPlacedPayload }
  | { type: OrderbookMessageType.ORDER_CANCELLED; payload: OrderCancelledPayload }
  | { type: OrderbookMessageType.OPEN_ORDERS; payload: OpenOrderPayload[] };
