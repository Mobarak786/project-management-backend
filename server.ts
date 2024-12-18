import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projects';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: 'https://project-manage-frontend.netlify.app/'
}));
app.use(express.json());

// Routes
app.use('/api', projectRoutes);

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});