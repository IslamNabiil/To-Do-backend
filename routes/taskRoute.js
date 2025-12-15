const express = require("express");
const router = express.Router();

const { createTask, getAllTasks } = require("../controllers/taskController");

// Route to create a new task
router.post("/tasks", createTask);

// Route to get all tasks
router.get("/tasks", getAllTasks);

module.exports = router;
