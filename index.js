const input = document.getElementById("todo-input")
const button =document.getElementById("add-btn")
const todoList = document.getElementById("todo-list") 

//Funciones normales
// function addTodo(){
//     console.log("Dentro")
// }

// //Función en una variable
// const addTodo = function(){

// }

const validateInput = (todoItemText) => {
    if (todoItemText.trim()  === ""){
        alert("No puedes registrar un ToDo Vacío")
        return false
    }
    return true
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

const appendElementToList = (todoItemText) => {
    const element = document.createElement("li");
    const text = document.createElement("span");
    const div = document.createElement("div");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");
    
    
    const flags = { completed: false };

    completeButton.textContent = "👍";
    deleteButton.textContent = "Eliminar";
    text.textContent = todoItemText;

    element.appendChild(text);
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

//arrow functions
const addTodo = () => {
    const todoItemText = input.value

    if (!validateInput(todoItemText)) return

    appendElementToList(todoItemText)
    
}

button.addEventListener("click", addTodo)