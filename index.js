const express = require("express");
const cors = require("cors");
const routes = require("./user/routes");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dilanjan_ranmalinda_98:Test123@dela.63bjv7u.mongodb.net/company?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
