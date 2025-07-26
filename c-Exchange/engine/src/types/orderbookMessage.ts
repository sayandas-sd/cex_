export const CREATE_ORDER = "CREATE_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const ON_RAMP = "ON_RAMP";

export const GET_DEPTH = "GET_DEPTH";

export interface Order {
    price: number;
    quantity: number;
    orderId: string;
    filled: number;
    side: "buy" | "sell";
    userId: string;
}

export interface Fill {
    price: string;
    qty: number;
    tradeId: number;
    otherUserId: string;
    markerOrderId: string;
}


export type MessageToApi = 
    |   {
            type: "DEPTH",
            payload: {
                bids: [string, string][],
                asks: [string, string][],
                e?: string;
            };
        } 
    |   {
            type: "ORDER_PLACED",
            payload: {
                orderId: string,
                executedQty: number,
                fills: {
                    price: string,
                    qty: number,
                    tradeId: number
                }[]
            };
        } 
    |   { 
            type: "ORDER_CANCELLED",
            payload: {
                orderId: string,
                executedQty: number,
                remainingQty: number
            };
        } 
    |   {
            type: "OPEN_ORDERS",
            payload: Order[]
        } 
    |   {
          type: "TRADE"; 
          payload: {
              e: string;
              t: number;
              m: boolean;
              p: string;
              q: string;
              s: string;
          };
        }