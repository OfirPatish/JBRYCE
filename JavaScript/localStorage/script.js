var tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

createTaskTable();

function createTaskTable() {
  var result = `<table border="1" cellSpacing="0">`;

  tasks.forEach(function (task, index) {
    var textDecoration = task.isDone ? 'style="text-decoration: line-through;"' : "";
    result += `
      <tr>
        <td ${textDecoration}>${task.name}</td>
        <td ${textDecoration}>${task.date}</td>
        <td><input type="checkbox" ${task.isDone ? "checked" : ""} onchange="toggleTaskDone(${index})"/></td>
      </tr>
    `;
  });

  result += "</table>";
  document.getElementById("taskList").innerHTML = result;
}

function Task(name, date, isDone) {
  this.name = name;
  this.date = date;
  this.isDone = isDone;
}

Task.prototype.markAsDone = function () {
  this.isDone = true;
};

const saveTasks = () => {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
};

const addTask = () => {
  var taskName = document.getElementById("taskName").value;
  var taskDate = document.getElementById("taskDate").value;
  tasks.push(new Task(taskName, taskDate, false));
  createTaskTable();
  saveTasks();
};

const clearTasks = () => {
  localStorage.removeItem("myTasks");
  tasks = [];
  createTaskTable();
};

const toggleTaskDone = (index) => {
  tasks[index].isDone = !tasks[index].isDone;
  createTaskTable();
  saveTasks();
};
