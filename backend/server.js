const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const appointmentRoutes = require("./routes/appointmentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const clinicRoutes = require("./routes/clinicRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const sequelize = require("./config/db");

require("./models/Appointment");
require("./models/Contact");
require("./models/Clinic");
require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/appointments",
  appointmentRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/clinics",
  clinicRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.get("/", (req, res) => {
  res.send(
    "AI Medical System API is running..."
  );
});

sequelize
  .authenticate()

  .then(() => {

    console.log(
      "MySQL connected successfully"
    );

    return sequelize.sync();

  })

  .then(() => {

    console.log(
      "Tables created successfully"
    );

  })

  .catch((err) => {

    console.log(
      "Database connection failed:",
      err
    );

  });

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});