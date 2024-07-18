const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// login Authorization Service End point
router.post("/api/login", async (req, res) => {
  //Authorization User after it done by Authetication

  const { email, password } = req.body;

  const ExistUser = { email: email, password: password };

  const accessToken = jwt.sign(ExistUser, process.env.ACCESS_TOKEN);

  res.json({ accessToken: accessToken });
});

function AutheticationToken(req, res, next) {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
