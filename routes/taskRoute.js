const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");

// Route to create a new task
router.post("/tasks", createTask);

// Route to get all tasks
router.get("/tasks", getAllTasks);

// Route to get a task by ID
router.get("/tasks/:id", getTaskById);

// Route to update a task by ID
router.patch("/tasks/:id", updateTaskById);

// Route to delete a task by ID
router.delete("/tasks/:id", deleteTaskById);

module.exports = router;
