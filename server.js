import express from "express"; //ES6 Modules import
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

// configure env
dotenv.config();

// connect database config
connectDB();

// Rest object for Create API
const app = express();

// middlewares
app.use(cors());
app.use(express.json()); // send json  data
app.use(morgan("dev"));

// routes
// follow naming convention
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rest API stay on Home
// req to handle and res to send api to user

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Create PORT
const PORT = process.env.PORT || 8080;

//Use PORT
//Use any PORT React PORT 3000, Angular 4200 and Node js 8000 or 8080 is most common

// run means listen
// nodemon watchsmode run server automatic detect and restart the server
//npm install -g nodemon

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
