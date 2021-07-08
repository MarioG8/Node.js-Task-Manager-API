const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoutes");
const colors = require("colors");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");

// colors
colors.setTheme({
  custom: ["red", "italic"],
  cyber: ["red", "bgBlack", "italic"],
});

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is  listening at http://localhost:${port}`.custom);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
