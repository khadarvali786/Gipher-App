const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios"); // node
const cors = require("cors");
const app = express();
const port = 1431;

const API_KEY = "nOjmYvazgK4ZZ1j3xOdKYalotr8AHALF";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// main()
//   .then(() => {
//     console.log("Conneted to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/Gipher");
// }

app.get("/", async (req, res) => {
  try {
    // const response = await axios.get(
    //   `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`
    // );
    // var object = response.data;
    // var imageObjects = object.data.map((obj) => {
    //   return obj.images.original;
    // });
    // res.send(imageObjects);
    // return imageObjects;
    

  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port : http://localhost:${port}`);
});
