const express = require("express");
const app = express();

const doctorRoutes = require("./routes/doctorRoutes");

app.use(express.json());

app.use("/doctors", doctorRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
