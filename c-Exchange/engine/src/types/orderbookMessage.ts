
export const enum OrderbookMessageType {
      DEPTH = "DEPTH",
      ORDER_PLACED = "ORDER_PLACED",
      ORDER_CANCELLED = "ORDER_CANCELLED",
      OPEN_ORDERS = "OPEN_ORDERS",
}

export interface Order {
    price: number;
    quantity: number;
    orderId: string;
    filled: number;
    side: "buy" | "sell";
    userId: string;
}


interface DepthPayload {
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

export type MessageToApi = 
      | { type: OrderbookMessageType.DEPTH; data: DepthPayload }
      | { type: OrderbookMessageType.OPEN_ORDERS; data: OrderPlacedPayload }
      | { type: OrderbookMessageType.ORDER_CANCELLED; data: OrderCancelledPayload }
      | { type: OrderbookMessageType.OPEN_ORDERS; data: Order[] }