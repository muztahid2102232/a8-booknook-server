import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


const client = new MongoClient(
  `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ac-vs9p2u4-shard-00-00.eslwacu.mongodb.net:27017,ac-vs9p2u4-shard-00-01.eslwacu.mongodb.net:27017,ac-vs9p2u4-shard-00-02.eslwacu.mongodb.net:27017/?ssl=true&replicaSet=atlas-12nm8i-shard-0&authSource=admin`,
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
const db = connectedClient.db("booknook");
const user = db.collection();


app.get("/",(req,res)=>{
    res.send("api is coming");
})

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`);
});
