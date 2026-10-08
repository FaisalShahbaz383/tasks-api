const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { validateTask } = require('../middleware/validate');

// 1. Apply authentication middleware FIRST to protect ALL task routes
router.use(auth);

// 2. Define protected CRUD routes with validation where needed
router.get('/', getTasks);
router.post('/', validateTask, createTask);
router.put('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;