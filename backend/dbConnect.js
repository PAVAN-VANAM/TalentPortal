const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(process.env.DB_URL);

  mongoose.connection.on("connected", () => {
    console.log("Connected MongoDB SuccessFully!!");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error in connection " + err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("DisConnected MongoDB");
  });
};

module.exports = dbConnect;
