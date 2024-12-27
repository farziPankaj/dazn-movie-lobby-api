import { Request, Response, NextFunction } from 'express';
import redisClient from '../config/redisClient';

const redisCache = (duration: number) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const key = `__express__${req.originalUrl || req.url}`;
    const cachedResponse = await redisClient.get(key);

    if (cachedResponse) {
        // if data exists in redis then send it
        res.json(JSON.parse(cachedResponse)); 
    } else {
        // storing the response in Redis after the response is sent
        // storing it for statusCode 200 only as it is for fetching data
        res.on('finish', () => {
            if (res.statusCode === 200) {
                redisClient.setEx(key, duration, JSON.stringify(res.locals.body));
            }
        });
        next();
    }
};

export default redisCache;
