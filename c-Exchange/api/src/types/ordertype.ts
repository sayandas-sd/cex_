import { ActionType } from "./status"

type CreateOrderPayload = {
  market: string;
  price: string;
  quantity: string;
  side: "buy" | "sell";
  userId: string;
};


type CancelOrderPayload = {
    orderId: string,
    market: string,
};

type OnRampPayload = {
    amount: string;
    userId: string;
    txnId: string;
}

type GetDepthPayload = {
    market: string,
}

type OpenOrderPayload = {
    userId: string;
    market: string;
}


export type MessageToEngine = 
    | { type: ActionType.CREATE_ORDER; data: CreateOrderPayload }
    | { type: ActionType.CANCEL_ORDER; data: CancelOrderPayload }
    | { type: ActionType.ON_RAMP; data: OnRampPayload }
    | { type: ActionType.GET_DEPTH; data: GetDepthPayload }
    | { type: ActionType.OPEN_ORDER; data: OpenOrderPayload };
    