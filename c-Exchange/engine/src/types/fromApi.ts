
export const enum ActionType {
  CREATE_ORDER = "CREATE_ORDER",
  CANCEL_ORDER = "ORDER_CANCEL",
  ON_RAMP = "ON_RAMP",
  OPEN_ORDER = "OPEN_ORDER",
  GET_DEPTH = "GET_DEPTH",
}

type CreateOrderPayload = {
      market: string,
      price: string,
      quantity: string,
      side: "buy" | "sell",
      userId: string 
}

type CancelOrderPayload = {
      orderId: string,
      market: string,
}

type OnRampPayload = {
       amount: string;
      userId: string;
      txnId: string;
}

type GetDepthPayload = {
      market: string,
}

type OpenOrderPayload = {
      userId: string,
      market: string,
}

export type MessageFromApi = 
  | { type: ActionType.CREATE_ORDER; data: CreateOrderPayload }
    | { type: ActionType.CANCEL_ORDER; data: CancelOrderPayload }
    | { type: ActionType.ON_RAMP; data: OnRampPayload }
    | { type: ActionType.GET_DEPTH; data: GetDepthPayload }
    | { type: ActionType.OPEN_ORDER; data: OpenOrderPayload };
    