import { createClient, RedisClientType } from "redis";

export class RedisManager {
    private client: RedisClientType;
    private publisher: RedisClientType;
    private static instance: RedisManager;

    private constructor() {
        this.client = createClient();
        this.client.connect();
        this.publisher = createClient();
        this.publisher.connect();
    }

    private static getInstance() {
        if(!this.instance) {
            return this.instance = new RedisManager();
        }
        return this.instance;
    }

    public sendAndAwait(message: any) { 
        return new Promise((resolve) => {
            const id = this.getRandomClientId();

            this.client.subscribe(id, (message) => {
                this.client.unsubscribe(id);
                resolve(JSON.parse(message));
            });

            this.publisher.lPush("messages", JSON.stringify({clientId: id, message }));
        })
    }


    public getRandomClientId() {
       return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

}
