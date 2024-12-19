import express  from "express";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const  router = express.Router();

router.get("/projects", (req, res) => {
    try{
const projectData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/projectData.json'), 'utf-8')
    );
    res.status(200).json(projectData);
    }catch(err){
     res.status(500).json({ error: err.message });
     console.error("Error reading project data:", err);
    }
});

   export default router;