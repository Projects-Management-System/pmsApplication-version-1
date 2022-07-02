require("dotenv").config({ path: "./config.env" });
const path = require("path");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();


connectDB();


app.use(cors());
app.use(express.json());


app.get("/", (req, res, next) => {
  res.send("Api running");
});


// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));


// Routes
const vendorProjectsOverviewTableRoutes = require("./routes/vendorProjectsOverviewTableRoutes.js");
const vendorProjectsDatabases = require("./routes/VendorDatabaseTableRoutes/vendorProjectsDatabasesRoutes.js");
const mobitelProjectsDatabases = require("./routes/MobitelDatabaseTableRoutes/mobitelProjectsDatabasesRoutes.js");
const mobitelProjectsOverviewTable = require("./routes/mobitelProjectsOverviewTableRoutes.js");
const mobitelProjectsDatabaseTable = require("./routes/MobitelDatabaseTableRoutes/mobitelDatabaseTableRoutes.js");
const vendorProjectsDatabaseTable = require("./routes/VendorDatabaseTableRoutes/vendroDatabaseTableRoutes.js");
const vendorProjectsMilestonesRoutes = require("./routes/VendorDatabaseTableRoutes/vendorProjectsMilestonesRoutes.js");
const userListGetRoutes = require("./routes/AuthGetRoutes/AuthGetUsersRoutes.js");
const siteEnginnersNamesList = require("./routes/SiteEngineersNamesRoutes/siteEngineerNamesArrayRoutes.js");

const vendorProjectsExcellUpload = require("./routes/VendorDatabaseTableRoutes/vendroDatabaseExcellUploadRoutes.js");
const mobitelProjectsExcellUpload = require("./routes/MobitelDatabaseTableRoutes/mobitelDatabaseExcellUploadRoutes.js");

const vendorProjectsDatabasesColumnChartData = require("./routes/VendorDatabaseTableRoutes/vendorProjectsDatabasesColumnChartDataRoutes.js");
const mobitelProjectsDatabasesColumnChartData = require("./routes/MobitelDatabaseTableRoutes/mobitelDatabasesColumnChartDataRoutes.js");

const mobitelProjectsEngineersAnalysis = require("./routes/MobitelDatabaseTableRoutes/mobitelProjectsEngineersRoutes.js");

// Error Handler Middleware
app.use(errorHandler);

app.use(vendorProjectsOverviewTableRoutes);
app.use(vendorProjectsDatabases);
app.use(mobitelProjectsDatabases);
app.use(mobitelProjectsOverviewTable);
app.use(mobitelProjectsDatabaseTable);
app.use(vendorProjectsDatabaseTable);
app.use(vendorProjectsMilestonesRoutes);
app.use(userListGetRoutes);
app.use(siteEnginnersNamesList);

app.use(vendorProjectsExcellUpload);
app.use(mobitelProjectsExcellUpload);

app.use(vendorProjectsDatabasesColumnChartData);
app.use(mobitelProjectsDatabasesColumnChartData);

app.use(mobitelProjectsEngineersAnalysis);

require('dotenv').config({ path: './.env' });

// --------------------------------------------------------------------------

if( process.env.NODE_ENV === "production" ) {
  app.use(express.static(path.join(__dirname, "/materialkit/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "materialkit", "build", "index.html"))
  })
} else {
  app.get("/", (req, res) => {
    res.send('API is running');
  })
}

// --------------------------------------------------------------------------


const PORT = process.env.PORT || 8072;

const server = app.listen(PORT, () =>
  console.log(`Sever is up and running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
