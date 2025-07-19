import { createClient } from "redis";

async function main() {
    const engine = new Engine();
    const redisClient = createClient();
    await redisClient.connect();

    console.log("connected on redis");

    while(true) {
        const response = await redisClient.rPop("messages" as string);
        if(!response) {

        } else {
            engine.process(JSON.parse(response))
        }
    }
}

main();