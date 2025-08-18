const express = require('express');
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'Setup DevOps Pipeline',
    description: 'Create CI/CD pipeline',
    status: 'pending',
    created_at: new Date().toISOString()
  }
];

let nextId = 2;

router.get('/', (req, res) => {
  res.json({ tasks });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTask = {
    id: nextId++,
    title,
    description: description || '',
    status: 'pending',
    created_at: new Date().toISOString()
  };
  
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
