const express = require("express");
const PORT = 3000;
const connectToDatabase = require("./src/config/database");
const appRoutes = require("./src/routes/index");
var bodyParser = require("body-parser");

async function startServer() {
  const app = express();
  await connectToDatabase();
  app.use(bodyParser.json());
  app.use("/api", appRoutes);
  app.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
  });
}

startServer();