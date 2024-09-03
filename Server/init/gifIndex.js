const mongoose = require("mongoose");
const gifs = require("../init/gifsData");
const Gif = require('../models/gifs');

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/gifsample");

}

const initDb=async()=>{
    await Gif.deleteMany({});
    await Gif.insertMany(gifs);
    console.log("data was initilized");
}

initDb();



