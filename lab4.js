"use strict";
let taskList = [];
const taskAdded = document.getElementById("addButton");
taskAdded.addEventListener("click", addTask);
function addTask() {
    const taskInput = document.getElementById("myInput");
    taskList.push(taskInput.value);
    taskInput.value = "";
    displayTask();
}
function displayTask() {
    const taskDisplay = document.getElementById("taskList");
    taskDisplay.innerHTML = "";
    for (const task of taskList) {
        const li = document.createElement("li");
        li.textContent = task;
        taskDisplay.appendChild(li);
    }
}
