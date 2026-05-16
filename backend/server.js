const model = require("./models");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

const adminClinicRoutes = require("./routes/adminClinicRoutes");
app.use("/api/manage-clinics", adminClinicRoutes);

app.use("/uploads", express.static("uploads"));

model.sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
