interface Task {
  id: number;
  title: string;
  description?: string | undefined;
  isCompleted: boolean;
}

const tasks: Task[] = [];

function addTask(title: string, description?: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false,
  };
  tasks.push(newTask);
}

function displayTasks() {
  tasks.forEach((task) => {
    console.log(`ID: ${task.id}`);
    console.log(`Title: ${task.title}`);
    if (task.description) {
      console.log(`Description: ${task.description}`);
    }
    console.log(`Completed: ${task.isCompleted}`);
    console.log("-------------------");
  });
}

function toggleTaskCompletion(id: number) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
  }
}

addTask("Learn TypeScript", "Understand the basics of TypeScript.");
addTask("Build a project", "Apply TypeScript knowledge in a real project.");

displayTasks();
