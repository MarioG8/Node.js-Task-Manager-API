require("./db/connect");
const express = require("express");
const colors = require("colors");
const app = express();
const tasks = require("./routes/tasks");

// colors

colors.setTheme({
  custom: ["yellow", "italic"],
  cyber: ["yellow", "bgBlack", "italic"],
});

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is  listening at http://localhost:${port}`.custom);
});
