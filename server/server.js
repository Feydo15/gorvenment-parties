const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const Party = require("./models/party");
const { reset } = require("nodemon");

// express app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongodb
const dbURI =
  "mongodb+srv://feydo:feyDo1234@node1.00lrnk3.mongodb.net/parties?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => app.listen(5000),
    console.log("connect success and listening on port 5000")
  )
  .catch((err) => console.log(err));


  app.get('/api', function (req, res) {
    let parties = Party.find({}, function(err, parties){
        if(err){
            console.log(err);
        }
        else {
            res.json(parties);
        }
    });
});



// party routs
// app.get("/parties", (req, res) => {
// Party.find()
// .sort({ createdAt: -1 })
// .then((result) => {
// })
// .catch((err) => {
// console.log(err);
// });
// });

app.post("/parties", async (req, res) => {
  try {
    const party = new Party(req.body);
    console.log(party)
    party.save();
    res.send(party)
  } catch (error) {
    res.status(400).send(error);
  }
});



//
app.delete("/parties/:id", async (req, res) => {
 try {
  const _id = req.params.id;
  const result = await parties.findByIdAndDelete(_id);
  if(!result){
    res.json({
      status: "SUCCESS",
      message: "Record is Deleted successfully..."
    })
  }else{
    res.json({
      status: "FAILED",
      message: "Record not Deleted successfully..."
    })
  }
  } catch (error) {
    res.status(400).send(error);
 }
});




// app.get("/add", (req, res) => {
  // res.render("add", { title: "add a new book" });
// });
//
// 404 page
// app.use((req, res) => {
// res.status(404).render("404", { title: "404" });
// });
//
