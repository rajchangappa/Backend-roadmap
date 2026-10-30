// Read the data from another file asynchronously
const fs = require("node:fs/promises");

async function loadTasks() {
  try {
    const tasks = await fs.readFile("./tasks.txt", "utf-8");
    console.log(tasks);
  } catch (error) {
    console.error("Error loading file", error);
  }
}

loadTasks();
