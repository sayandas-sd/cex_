import { Orderbook } from "./orderbook";


interface UserBalance {
    [key: string]: {
        available: number;
        locked: number;
    }
}
export class Engine {
    private orderbook: Orderbook[] = [];
    private userbalance: Map<string, UserBalance> = new Map();
    
    constructor() {
        
    }
}