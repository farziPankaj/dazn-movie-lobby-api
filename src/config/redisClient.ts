import { createClient } from 'redis';

const redisClient = createClient({
    socket: {
      host: '127.0.0.1',
      port: 6379,
    },
  });

// const redisClient = createClient();

redisClient.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedisClient() {
    try {
        await redisClient.connect();
        console.log('Redis connected');
    } catch (err) {
        console.log("--------------In catch block of redisClient file & connectRedisClient method--------------");
        console.log({error: err});
    }
}

connectRedisClient();

export default redisClient;
