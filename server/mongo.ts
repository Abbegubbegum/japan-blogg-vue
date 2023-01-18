import { MongoClient } from "mongodb";

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/blogs";

const client = new MongoClient(mongoURI);

export default client;
