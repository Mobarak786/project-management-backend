import express from "express";
import cors from "cors";
import projectRoute from "./Routes/Project.router.js";

const app = express();

const PORT = process.env.PORT || 3000;

//middleware for cors
const corsOptions = {
  origin: "https://project-manage-frontend.netlify.app",
};
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// health check   route
app.get("/", (req, res) => {
  res.status(200).send("server is running");
});

// projects route
app.use("/api", projectRoute);

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
