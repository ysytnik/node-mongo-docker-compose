const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const path = require("path");
const db = require("./db");
const collection = "todo";

const getErrorAndResult = (err, result, response) => {
  if (err) console.log(err);
  else response.json(result);
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getAll", (req, res) => {
  db.getDBAndCollection(collection)
    .find({})
    .toArray((err, documents) => {
      getErrorAndResult(err, documents, res);
    });
});

app.post("/", (req, res) => {
  const userInput = req.body;
  db.getDBAndCollection(collection).insertOne(userInput, (err, result) => {
    if (err) console.log(err);
    else {
      res.json({ result: result, document: result.ops[0] });
    }
  });
});

app.delete("/:id", (req, res) => {
  const todoID = req.params.id;
  db.getDBAndCollection(collection).findOneAndDelete(
    { _id: db.getPrimirayKey(todoID) },
    (err, result) => {
      getErrorAndResult(err, result, res);
    }
  );
});

app.put("/:id", (req, res) => {
  const todoID = req.params.id;
  const userInput = req.body;

  db.getDBAndCollection(collection).findOneAndUpdate(
    { _id: db.getPrimirayKey(todoID) },
    { $set: { todo: userInput.todo } },
    { returnOriginal: false },
    (err, result) => {
      getErrorAndResult(err, result, res);
    }
  );
});

db.connect(err => {
  if (err) {
    console.log("unable to connect to database", err);
    process.exit(1);
  } else {
    app.listen(3000, () => {
      console.log("connected to the database, app is listening on port 3000");
    });
  }
});
