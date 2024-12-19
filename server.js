import express from 'express';
import cors from 'cors'
import projectRoute from './Routes/Project.router.js'

const app = express();
 
const PORT = process.env.PORT || 3000

// Middleware to parse JSON requests
app.use(express.json());  
app.use(cors())

// health check   route
app.get('/', (req, res) => {
  res.status(200).send('server is running');

});

// projects route
app.use('/api',projectRoute);

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});