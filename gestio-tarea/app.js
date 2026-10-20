
"use strict";

// ========================================
// CLASES PARA LAS TAREAS
// ========================================

class Task {
    constructor(name) {
        this.id = Date.now() + Math.random();
        this.name = name;
        this.type = "normal";
    }

    displayTask() {
        return this.name;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            type: this.type
        };
    }
}

class SpecialTask extends Task {
    constructor(name, priority) {
        super(name);
        this.type = "especial";
        this.priority = priority;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            priority: this.priority
        };
    }
}

// ========================================
// ELEMENTOS DEL HTML
// ========================================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskPriority = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");

const totalTasksElement = document.getElementById("totalTasks");
const normalTasksElement = document.getElementById("normalTasks");
const highTasksElement = document.getElementById("highTasks");
const mediumTasksElement = document.getElementById("mediumTasks");
const lowTasksElement = document.getElementById("lowTasks");
const taskCountElement = document.getElementById("taskCount");

let tasks = [];

// ========================================
// VALIDACIONES EN ESPAÑOL
// ========================================

taskInput.addEventListener("invalid", function () {
    if (taskInput.validity.valueMissing) {
        taskInput.setCustomValidity(
            "Por favor, escribe el nombre de la tarea."
        );
    } else if (taskInput.validity.tooLong) {
        taskInput.setCustomValidity(
            "La tarea no puede superar los 150 caracteres."
        );
    }
});

taskInput.addEventListener("input", function () {
    taskInput.setCustomValidity("");
});

// ========================================
// AGREGAR TAREAS
// ========================================

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const priority = taskPriority.value;

    if (taskText.length < 3) {
        alert("Escribe una tarea de al menos 3 caracteres.");
        taskInput.focus();
        return;
    }

    addTask(taskText, priority);

    taskForm.reset();
    taskInput.focus();
});

function addTask(taskText, priority = "Normal") {
    let newTask;

    if (priority === "Normal") {
        newTask = new Task(taskText);
    } else if (["Baja", "Media", "Alta"].includes(priority)) {
        newTask = new SpecialTask(taskText, priority);
    } else {
        newTask = new Task(taskText);
    }

    tasks.push(newTask);

    saveTasks();
    renderTasks();
}

// ========================================
// MOSTRAR LAS TAREAS
// ========================================

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const message = document.createElement("li");
        message.classList.add("empty-message");

        const icon = document.createElement("span");
        icon.classList.add("empty-icon");
        icon.textContent = "✓";

        const title = document.createElement("strong");
        title.textContent = "Tu lista está vacía";

        const description = document.createElement("span");
        description.textContent =
            "Agrega una tarea para comenzar a organizarte.";

        message.append(icon, title, description);
        taskList.appendChild(message);
    }

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.classList.add("task-item");

        let cssPriority = "normal";
        let priorityLabel = "Prioridad normal";

        if (task.type === "especial") {
            switch (String(task.priority).toLowerCase()) {
                case "alta":
                    cssPriority = "alta";
                    priorityLabel = "Prioridad alta";
                    break;

                case "media":
                    cssPriority = "media";
                    priorityLabel = "Prioridad media";
                    break;

                case "baja":
                    cssPriority = "baja";
                    priorityLabel = "Prioridad baja";
                    break;
            }
        }

        li.classList.add(cssPriority);

        const content = document.createElement("div");
        content.classList.add("task-content");

        const name = document.createElement("span");
        name.classList.add("task-name");
        name.textContent = task.displayTask();

        const badge = document.createElement("span");
        badge.classList.add("task-priority");
        badge.textContent = priorityLabel;

        content.append(name, badge);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Eliminar";

        deleteButton.dataset.id = String(task.id);
        deleteButton.setAttribute(
            "aria-label",
            "Eliminar tarea: " + task.name
        );

        li.append(content, deleteButton);
        taskList.appendChild(li);
    });

    updateSummary();
}

// ========================================
// ACTUALIZAR LOS CINCO CONTADORES
// ========================================

function updateSummary() {
    // Total de tareas
    totalTasksElement.textContent = tasks.length;

    // Prioridad normal
    const normalCount = tasks.filter(function (task) {
        return task.type === "normal";
    }).length;

    // Prioridad alta
    const highCount = tasks.filter(function (task) {
        return (
            task.type === "especial" &&
            String(task.priority).toLowerCase() === "alta"
        );
    }).length;

    // Prioridad media
    const mediumCount = tasks.filter(function (task) {
        return (
            task.type === "especial" &&
            String(task.priority).toLowerCase() === "media"
        );
    }).length;

    // Prioridad baja
    const lowCount = tasks.filter(function (task) {
        return (
            task.type === "especial" &&
            String(task.priority).toLowerCase() === "baja"
        );
    }).length;

    // Mostrar los resultados
    normalTasksElement.textContent = normalCount;
    highTasksElement.textContent = highCount;
    mediumTasksElement.textContent = mediumCount;
    lowTasksElement.textContent = lowCount;

    // Actualizar el contador de la lista
    taskCountElement.textContent =
        tasks.length + (tasks.length === 1 ? " tarea" : " tareas");
}

// ========================================
// ELIMINAR TAREAS
// ========================================

taskList.addEventListener("click", function (event) {
    const button = event.target.closest(".delete-btn");

    if (!button || !taskList.contains(button)) {
        return;
    }

    deleteTask(button.dataset.id);
});

function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return String(task.id) !== taskId;
    });

    saveTasks();
    renderTasks();
}

// ========================================
// GUARDAR TAREAS EN EL NAVEGADOR
// ========================================

function saveTasks() {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Error al guardar las tareas:", error);

        alert(
            "No se pudieron guardar las tareas. " +
            "Comprueba el almacenamiento del navegador."
        );
    }
}

// ========================================
// RECUPERAR TAREAS GUARDADAS
// ========================================

function loadTasks() {
    try {
        const savedTasks = localStorage.getItem("tasks");

        if (!savedTasks) {
            tasks = [];
            return;
        }

        const parsedTasks = JSON.parse(savedTasks);

        if (!Array.isArray(parsedTasks)) {
            tasks = [];
            return;
        }

        tasks = parsedTasks
            .filter(function (item) {
                return (
                    item &&
                    typeof item.name === "string" &&
                    item.name.trim() !== ""
                );
            })
            .map(function (item) {
                const priority = String(
                    item.priority || ""
                ).toLowerCase();

                let task;

                if (
                    item.type === "especial" &&
                    ["alta", "media", "baja"].includes(priority)
                ) {
                    const formattedPriority =
                        priority.charAt(0).toUpperCase() +
                        priority.slice(1);

                    task = new SpecialTask(
                        item.name,
                        formattedPriority
                    );
                } else {
                    task = new Task(item.name);
                }

                if (item.id !== undefined && item.id !== null) {
                    task.id = item.id;
                }

                return task;
            });
    } catch (error) {
        console.error("Error al recuperar las tareas:", error);
        tasks = [];
    }
}

// ========================================
// INICIAR LA APLICACIÓN
// ========================================

loadTasks();
renderTasks();
