const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send({
    message: "API is working now",
  });
});


app.use((req, res, next) => {
  res.status(404).send({
    message: "Not Found",
  });
});


async function startServer() {
  try {
    await connection;
    console.log("Database is connected");
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); 
  }
}

startServer();
