// Define a class to manage tasks
class TaskManager {
  constructor() {
    this.tasks = []; // Array to store tasks
    this.taskId = 0; // Initialize task ID
  }

  // Update the task ID based on the current tasks
  updateTaskId() {
    this.taskId = this.tasks.length === 0 ? 0 : Math.max(...this.tasks.map((task) => task.id)) + 1;
  }

  // Create a new task and add it to the DOM
  createTask(id, note, dueDate, dueTime) {
    // Create new elements for the task
    const newTaskColumn = document.createElement("div");
    newTaskColumn.className = "col-lg-4";

    const newTask = document.createElement("div");
    newTask.className = "task new-task fade-in";
    newTask.dataset.id = id;

    // Set the inner HTML of the task
    newTask.innerHTML = `
        <button type="button" class="btn-close" aria-label="Close"></button>
        <h2>${note}</h2>
        <div class="task-date-time">
            <p>${dueDate}</p>
            <p>${dueTime}</p>
        </div>
      `;

    // Append the task to the DOM
    newTaskColumn.appendChild(newTask);
    document.getElementById("taskBoard").appendChild(newTaskColumn);

    // Add a fade-in effect
    setTimeout(() => (newTask.style.opacity = 1), 0);

    // Add an event listener to the close button
    newTask.querySelector(".btn-close").addEventListener("click", () => {
      const id = newTask.dataset.id;
      this.tasks = this.tasks.filter((task) => task.id != id);

      // If there are no tasks left, remove the tasks key from local storage
      if (this.tasks.length === 0) {
        localStorage.removeItem("tasks");
      } else {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }

      newTask.remove();
    });
  }

  // Load tasks from local storage
  loadTasks() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);

      const now = new Date();

      // Filter out tasks that are due in the past
      this.tasks = this.tasks.filter((task) => new Date(`${task.dueDate} ${task.dueTime}`) > now);

      // If there are no tasks left, remove the tasks key from local storage
      if (this.tasks.length === 0) {
        localStorage.removeItem("tasks");
      } else {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }

      this.updateTaskId();

      // Create tasks for each stored task
      this.tasks.forEach((task) => this.createTask(task.id, task.note, task.dueDate, task.dueTime));
    }
  }

  // Add a new task
  addTask(note, dueDate, dueTime) {
    this.createTask(this.taskId, note, dueDate, dueTime);

    const task = {
      id: this.taskId,
      note,
      dueDate,
      dueTime,
    };

    // Add the task to the tasks array
    this.tasks.push(task);

    // Store the tasks in local storage
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    this.updateTaskId();
  }
}

// Create a new task manager
const taskManager = new TaskManager();

// Load tasks when the window loads
window.onload = () => taskManager.loadTasks();

// Add an event listener to the task form
document.getElementById("taskForm").addEventListener("submit", function (submitEvent) {
  submitEvent.preventDefault();

  // Get the form values
  const note = document.getElementById("note").value;
  const inputDate = new Date(document.getElementById("dueDate").value);
  const dueDate = inputDate.toLocaleDateString();
  const dueTime = document.getElementById("dueTime").value;

  // Add a new task
  taskManager.addTask(note, dueDate, dueTime);

  // Reset the form
  document.getElementById("taskForm").reset();
});
