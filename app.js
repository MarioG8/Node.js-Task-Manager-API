const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const colors = require("colors");
const connectDB = require("./db/connect");
require("dotenv").config();

// colors
colors.setTheme({
  custom: ["red", "italic"],
  cyber: ["red", "bgBlack", "italic"],
});

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

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
