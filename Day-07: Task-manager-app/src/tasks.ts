import type { Task } from "./types";

let tasks: Task[] = [];

// Function to add a new task
export function addTask(title: string, description?: string) {
  if (title.trim() === "") {
    console.log("Task title cannot be empty.");
    return;
  }

  const newTask: Task = {
    id: `tm${tasks.length + 1}`,
    title: title.trim(),
    description: description?.trim(),
    isCompleted: false,
  };
  tasks.push(newTask);
}

// Function to display all tasks
export function displayTasks() {
  if (tasks.length === 0) {
    console.log("No tasks available.");
    return;
  }

  tasks.forEach((task) => {
    console.log(task);
  });
}

// Function to toggle the completion status of a task
export function toggleTaskCompletion(id: string) {
  const task = tasks.find((task) => task.id === id);
  !task
    ? console.log(`Task with ID ${id} not found.`)
    : (task.isCompleted = !task.isCompleted);

  console.log(
    `Task with ID ${id} is now ${task?.isCompleted ? "completed" : "not completed"}.`,
  );
}

// Example usage
addTask("Buy groceries", "Milk, Eggs, Bread");
addTask("Read a book", "The Great Gatsby");
toggleTaskCompletion("tm2");
