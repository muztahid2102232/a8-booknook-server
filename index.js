import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient } from "mongodb";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());


const client = new MongoClient(
  "mongodb+srv://<db_username>:<db_password>@cluster0.eslwacu.mongodb.net/",
);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await connectToMongoDB();
const db = connectedClient.db();
const user = db.collection();

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
