import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projects.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const allowedOrigins = [
  'https://project-manage-frontend.netlify.app',
  'http://localhost:5173',
  'https://project-management-frontend-rho.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
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