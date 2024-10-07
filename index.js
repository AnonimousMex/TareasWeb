const input = document.getElementById("todo-input")
const button = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list") 
const hourHtml = document.getElementById("hours")
const minutesHtml = document.getElementById("minutes")
const secondsHtml = document.getElementById("seconds")
const dayHtml = document.getElementById("day")
const monthHtml = document.getElementById("month")
const yearHtml = document.getElementById("year")


const validateInput = (todoItemText) => {
    if (todoItemText.trim() === "") {
        alert("No puedes registrar un ToDo Vacío");
        return false;
    }
    return true;
}


const editTodo = (spanElement, liElement, flags) => {
    spanElement.addEventListener("dblclick", () => {
        const inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.value = spanElement.textContent;
        liElement.replaceChild(inputItem, spanElement);

        inputItem.addEventListener("keypress", (event) => {
            if (flags.completed === true) {
                alert("No puedes editar un campo completado");
            } else {
                if (event.key === "Enter") {
                    if (!validateInput(inputItem.value)) {
                        return;
                    }
                    spanElement.textContent = inputItem.value;
                    liElement.replaceChild(spanElement, inputItem);
                }
            }
        });
    });
};


const appendElementToList = (todoItemText, todoItemhour, todoItemDate) => {
    const element = document.createElement("li");
    const text = document.createElement("span");
    const hour = document.createElement("span");
    const date = document.createElement("span");
    const div = document.createElement("div");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    const flags = { completed: false };

    completeButton.textContent = "👍";
    deleteButton.textContent = "Eliminar";
    text.textContent = todoItemText;
    hour.textContent = ` ${todoItemhour}`;
    date.textContent = ` ${todoItemDate}`;

    element.appendChild(text);
    element.appendChild(hour);
    element.appendChild(date);
    div.appendChild(deleteButton);
    div.appendChild(completeButton);
    element.appendChild(div);

    completeButton.addEventListener("click", () => {
        element.classList.toggle("completed");
        flags.completed = !flags.completed;
    });

    deleteButton.addEventListener("click", () => {
        element.remove();
    });

    editTodo(text, element, flags); 

    todoList.appendChild(element);
    input.value = "";
};


const updateClock = () => {
    const dateNow = new Date();
    const hour = String(dateNow.getHours()).padStart(2, '0');
    const minutes = String(dateNow.getMinutes()).padStart(2, '0');
    const seconds = String(dateNow.getSeconds()).padStart(2, '0');

    hourHtml.textContent = hour;
    minutesHtml.textContent = minutes;
    secondsHtml.textContent = seconds;
}


setInterval(updateClock, 1000);

const updateDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    dayHtml.textContent = day;
    monthHtml.textContent = month;
    yearHtml.textContent = year;
};

window.onload = function() {
    updateDate();
  };



const addTodo = () => {
    const time = `${hourHtml.textContent}:${minutesHtml.textContent}:${secondsHtml.textContent}`;
    const date = `${dayHtml.textContent}/${monthHtml.textContent}/${yearHtml.textContent}`
    const todoItemText = input.value;

    if (!validateInput(todoItemText)) return;

    appendElementToList(todoItemText, time, date);
}

button.addEventListener("click", addTodo);
