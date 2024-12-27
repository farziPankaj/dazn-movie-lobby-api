import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/connectionDB';
import movieRoutes from './routes/movieRoutes';

// Initialize dotenv
dotenv.config();

// Define types for environment variables
const host: string | undefined = process.env.HOST;
const portNumber: number = process.env.PORT_NUMBER ? parseInt(process.env.PORT_NUMBER, 10) : 8800;
const url: string | undefined = `${process.env.URL}:${portNumber}`;
const localDBUrl: string | undefined = process.env.LOCAL_DB_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// heartBeat api
app.get('/', (_, res) => {
    console.log(`Server is running fine`);
    res.status(200).send({
        statusCode: 200,
        success: true,
        status: `OK`,
        message: `Server is up and running`
    });
});

app.use('/v1', movieRoutes);

// handle 404 Not Found
app.use((_, res) => {
    res.status(404).json({
        status: 404,
        message: 'Route Not Found'
    });
});

async function startServer() {
    console.log("-----------------In app file & startServer method-------------");
    try{
        if (!localDBUrl || !host) {
            throw new Error("localDBUrl or host is not defined in environment variables.");
        }
        await connectDB(localDBUrl);
        app.listen(portNumber, host, () => {
            console.log(`Server is running and listening on port: ${portNumber} and host: ${host}`);
            console.log(`To access the http server run the following url in browser: ${url}`);
        });
    }catch(err){
        console.log("---------------In catch block of app file & startServer method-------------");
        console.log(`Error - Server can't start\n${err}`);
        process.exit(1);
    }
};

startServer();
