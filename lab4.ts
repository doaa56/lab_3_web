let taskList: string[] = [];
const taskAdded = document.getElementById("addButton") as HTMLButtonElement;
taskAdded.addEventListener("click", addTask);

function addTask(): void {
    const taskInput = document.getElementById("myInput") as HTMLInputElement;
    taskList.push(taskInput.value);
    taskInput.value = "";
    displayTask();
}

function displayTask(): void {
    const taskDisplay = document.getElementById("taskList") as HTMLUListElement;
    taskDisplay.innerHTML = "";

    for (const task of taskList) {
        const li = document.createElement("li");
        li.textContent = task;
        taskDisplay.appendChild(li);
    }
}
