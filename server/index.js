const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken');
require('dotenv').config();

// middleware
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorized access' });
  } else {
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.Token_Secret, (err, decoded) => {
      if (err) {
        res.status(401).send({ error: true, message: 'unauthorized access' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};

//MongoDB
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dzhlcpb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // database
    const usersCollection = client.db("ruec").collection("users");
    const membersCollection = client.db("ruec").collection("members");
    const committeesCollection = client.db("ruec").collection("committees");
    const advisoriesCollection = client.db("ruec").collection("advisories");
    const galleryCollection = client.db("ruec").collection("gallery");
    const eventsCollection = client.db("ruec").collection("events");

    // handle jwt
    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Token_Secret, { expiresIn: '1h' });
      res.send(token);
    });

    //set users info
    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    //get users info
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // get user by email
    app.get('/users/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // update user role as member
    app.patch('/users/member/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { role: 'member' }
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // update user role as admin
    app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { role: 'admin' }
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // remove user
    app.delete('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    //insert user to member collection
    app.post('/member', async (req, res) => {
      const member = req.body;
      const result = await membersCollection.insertOne(member);
      res.send(result);
    });

    //get members data
    app.get('/members', async (req, res) => {
      const result = await membersCollection.find().toArray();
      res.send(result);
    });

    // get specific member by email
    app.get('/member/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await membersCollection.findOne(query);
      res.send(result);
    });

    //remove member
    app.delete('/members/admin/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await membersCollection.deleteOne(query);
      res.send(result);
    });

    //set committees info
    app.post('/committee', async (req, res) => {
      const user = req.body;
      const result = await committeesCollection.insertOne(user);
      res.send(result);
    });

    //get committees info
    app.get('/committee', async (req, res) => {
      const result = await committeesCollection.find().toArray();
      res.send(result);
    });

    //set advisories info
    app.post('/advisory', async (req, res) => {
      const user = req.body;
      const result = await advisoriesCollection.insertOne(user);
      res.send(result);
    });

    //get advisories info
    app.get('/advisory', async (req, res) => {
      const result = await advisoriesCollection.find().toArray();
      res.send(result);
    });

    //set gallery info
    app.post('/gallery', async (req, res) => {
      const user = req.body;
      const result = await galleryCollection.insertOne(user);
      res.send(result);
    });

    //get gallery info
    app.get('/gallery', async (req, res) => {
      const result = await galleryCollection.find().toArray();
      res.send(result);
    });

    //set events info
    app.post('/events', async (req, res) => {
      const user = req.body;
      const result = await eventsCollection.insertOne(user);
      res.send(result);
    });

    //get events info
    app.get('/events', async (req, res) => {
      const result = await eventsCollection.find().toArray();
      res.send(result);
    });

    // change event status
    app.patch('/events/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { status: 'completed' }
      };
      const result = await eventsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // remove event
    app.delete('/events/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventsCollection.deleteOne(query);
      res.send(result);
    });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});