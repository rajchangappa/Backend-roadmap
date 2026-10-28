// Print a list of tasks in the terminal as a numbered list and use process.argv to add task through the terminal
const tasks = ["Learn JavaScript", "Learn TypeScript", "Learn Node.js"];

function printNumberedTasks() {
  tasks.forEach((task, index) => {
    let list = `${index + 1}: ${task}`;
    console.log(list);
  });
}

function addNewTask(task) {
  let newTask = task;
  tasks.push(newTask);
}

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
