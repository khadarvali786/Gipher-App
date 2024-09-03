require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Gif = require('./models/gifs');
const bodyParser = require("body-parser");
const axios = require("axios"); // node
const cors = require("cors");
const URL = process.env.DB_URL
main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URL);
}

const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async(req, res) => {
  var URL= `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&offset=0&rating=g&bundle=messaging_non_clips`
  const response = await axios.get(URL);
  var data=response.data.data;
  var gif = data.map((gif)=>{ return gif.images.original});
  // console.log(gif);
  res.send(gif);
  // var gif = await Gif.find();
  // res.send(gif);
  return gif
});

app.get("/gifs/search", async(req,res)=>{
  var query=req.query.q;
  var URL= `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await axios.get(URL);
  var data=response.data.data;
  var gif = data.map((gif)=>{ return gif.images.original});
  // console.log(gif);
  res.send(gif);
  return gif;

})

app.put("/update/:id",async(req,res)=>{
  
  await Gif.findOneAndUpdate({ name: req.params.id })
  .then((doc) => {
    doc.IsLiked = !req.body.Liked;
    doc.save();
    // console.log(doc);
    res.send(doc);
    })
})

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
