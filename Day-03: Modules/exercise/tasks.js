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

module.exports = { addNewTask, printNumberedTasks };
