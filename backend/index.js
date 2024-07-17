const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// database imports
const userRouter = require("./router/userRouter");
const ProfileRouter = require("./router/ProfileRouter");
const Login = require("./router/Login");
const dbConnect = require("./dbConnect");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only from this origin
  })
);

// MiddleWare
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Basic root api
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// MongoDB Connection
dbConnect();

// Use a Router MiddleWare for User and Profile routes
app.use(userRouter);
app.use(ProfileRouter);
app.use(Login);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
