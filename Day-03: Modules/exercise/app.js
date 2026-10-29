// Create a task tracker using modules
const { addNewTask, printNumberedTasks } = require("./tasks");

printNumberedTasks();

const incomingTask = process.argv[2];

// Check for input validation
if (incomingTask === undefined) {
  console.log("No task provided!");
} else if (incomingTask.trim() === "") {
  console.log("Task can't be entirely whitespaces!");
} else {
  addNewTask(incomingTask);
  console.log("--- New task ---");
  printNumberedTasks();
}
