const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path")

// 1. Endpoint (mount path)
// 2. Callback function
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "client", "build")))

// Conect DataBase
mongoose.connect(
  "mongodb+srv://keyesnicholas2017:ZfVMFfzCHvjMzKcz@cluster0.byosti0.mongodb.net/",
  () => console.log("connected to DB")
);

//Routes
app.use("/api/beast", require("./routes/beastRouter.js"));
app.use("/api/creeper", require("./routes/creeperRouter.js"));
app.use("/api/flyer", require("./routes/flyerRouter.js"));
app.use("/api/onFour", require("./routes/onFourRouter.js"));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
