{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__items">
                <button class="list__button--done js-done">${task.done ? "✓" : ""}</button>
                <span class="${task.done ? "list__text--done" : ""}"> ${task.content} </span>
                <button class="list__button--remove js-remove">🗑</button>
            </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents()
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        const newTaskInput = document.querySelector(".js-newTask");
        newTaskInput.value = "";
        newTaskInput.focus();

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}