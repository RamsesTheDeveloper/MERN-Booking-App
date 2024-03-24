import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response)=> {
    res.json({ message: "Hello from express endpoint!"});
});

app.listen(1500, () => {
    console.log("Server is running on localhost: 1500");
});


/*

dotenv/config ) dotenv/config loads our environment variables when the app launches.


mongoose ) mongoose is used to interact with our database.


mongoose.connect ) Values can be undefined when we pull them out of our .env file, so we have to cast them as strings.

Run the backend application after setting up mongoose.connect for the purpose of catching errors early on.


express.json ) express.json() converts the body of the client's request into JSON.


express.urlencoded ) express.urlencoded() helps us parse the URL.


cors ) cors prevents other websites from making requests to our backend.

*/

/*

Switch to the tailwind.config.js file.

*/