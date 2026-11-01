interface Task {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
}

let tasks: Task[] = [];

function addTask(title: string, description?: string): void {
  if (title.trim() === "") {
    console.log("Task title cannot be empty.");
    return;
  }

  const newTask: Task = {
    id: tasks.length + 1,
    title: title.trim(),
    isCompleted: false,
  };

  if (description !== undefined) {
    newTask.description = description;
  }

  tasks.push(newTask);
}

function displayTasks(taskList: Task[]): void {
  taskList.forEach((task) => {
    console.log(`ID: ${task.id}`);
    console.log(`Title: ${task.title}`);
    if (task.description !== undefined) {
      console.log(`Description: ${task.description}`);
    }
    console.log(`Completed: ${task.isCompleted}`);
    console.log("-------------------");
  });
}

function toggleTaskCompletion(taskId: number): void {
  const task = tasks.find((task) => task.id === taskId);
  if (task === undefined) {
    console.log(`Task with ID ${taskId} was not found.`);
    return;
  }

  task.isCompleted = !task.isCompleted;
}

function updateTask(taskId: number, title: string): void {
  if (title.trim() === "") {
    console.log("Task title cannot be empty.");
    return;
  }

  const task = tasks.find((task) => task.id === taskId);
  if (task === undefined) {
    console.log(`Task with ID ${taskId} was not found.`);
    return;
  }

  task.title = title.trim();
}

function deleteTask(taskId: number): void {
  tasks = tasks.filter((task) => task.id !== taskId);
}

function filterTasks(status: string): Task[] | null {
  if (status !== "completed" && status !== "pending") {
    console.log('Status must be "completed" or "pending".');
    return null;
  }

  return tasks.filter((task) =>
    status === "completed" ? task.isCompleted : !task.isCompleted,
  );
}

// Example usage
addTask("Learn TypeScript", "Understand the basics of TypeScript.");
addTask("Build a project", "Apply TypeScript in a project.");
updateTask(1, "Learn TypeScript Fundamentals");
toggleTaskCompletion(1);

displayTasks(tasks);
