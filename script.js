document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function loadTasks() {
    const todoContainer = document.getElementById("todo-container");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        createTaskElement(task);
    });
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoContainer = document.getElementById("todo-container");
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        const newTask = {
            id: Date.now(),
            text: taskText,
        };

        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        createTaskElement(newTask);
        taskInput.value = "";
    }
}

function createTaskElement(task) {
    const todoContainer = document.getElementById("todo-container");

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.setAttribute("data-id", task.id);
    taskElement.style.opacity = "0";

    taskElement.innerHTML = `
        <p>${task.text}</p>
        <button class="delete-task-button" onclick="deleteTask(${task.id})">Delete</button>
    `;

    todoContainer.appendChild(taskElement);

    setTimeout(() => {
        taskElement.style.opacity = "1";
        taskElement.style.transform = "translateX(0)";
    }, 10);
}

function deleteTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const taskElement = document.querySelector(`.task[data-id="${taskId}"]`);
    if (taskElement) {
        taskElement.style.opacity = "0";
        taskElement.style.transform = "translateX(-100%)";
        setTimeout(() => {
            taskElement.remove();
        }, 300);
    }
}
