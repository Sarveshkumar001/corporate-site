const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 MongoDB connection string
const url = "mongodb://skpark206_db_user:0YJlMZUi7Ck3p7SK@ac-1plldp3-shard-00-00.bwi4seb.mongodb.net:27017,ac-1plldp3-shard-00-01.bwi4seb.mongodb.net:27017,ac-1plldp3-shard-00-02.bwi4seb.mongodb.net:27017/?ssl=true&replicaSet=atlas-b5k8v9-shard-0&authSource=admin&appName=outpro-cluster";

const client = new MongoClient(url);

let collection;

// 🔥 Start server + DB connect
async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connected 🔥");

    const db = client.db("mydatabase");
    collection = db.collection("contacts");

    // 🔥 GET (Read)
    app.get("/contacts", async (req, res) => {
      const data = await collection.find().toArray();
      res.json(data);
    });

    // 🔥 POST (Create)
    app.post("/contact", async (req, res) => {
      const data = req.body;
      await collection.insertOne(data);
      res.json({ message: "Saved 🔥" });
    });

    // 🔥 PUT (Update)
    app.put("/contact/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;

      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );

      res.json({ message: "Updated 🔥" });
    });

    // 🔥 DELETE
    app.delete("/contact/:id", async (req, res) => {
      const id = req.params.id;

      await collection.deleteOne({ _id: new ObjectId(id) });

      res.json({ message: "Deleted 🔥" });
    });

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  } catch (err) {
    console.log(err);
  }
}

startServer();

