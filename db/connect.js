const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://mario:123456Mg@cluster0.fag5p.mongodb.net/Task-Manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the mongoDB successfully!".cyber))
  .catch((err) => console.log(err));
