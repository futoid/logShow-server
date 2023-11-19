const express = require("express");
const PORT = 3000;
const connectToDatabase = require("./config/database");
const appRoutes = require("./routes/index");
var bodyParser = require("body-parser");
const cors = require("cors");

async function startServer() {
  const app = express();
  await connectToDatabase();
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api", appRoutes);
  app.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
  });
}

startServer();
