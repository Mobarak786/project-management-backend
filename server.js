import express from "express";
import cors from "cors";
import projectRoute from "./Routes/Project.router.js";

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://project-manage-frontend.netlify.app/",
  ],
  credentials: true,
};
// Middleware to parse JSON requests
app.use(express.json());
app.use(cors(corsOptions));

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
