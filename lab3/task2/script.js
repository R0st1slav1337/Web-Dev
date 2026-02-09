const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");

function createTodoItem(textValue) {
    const li = document.createElement("li");
    li.className = "item";

    const left = document.createElement("div");
    left.className = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("area-label", "Mark task as done");

    const text = document.createElement("span");
    text.className = "text";
    text.textContent = textValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("area-label", "Delete task");

    checkbox.addEventListener("change", () => {
        li.classList.toggle("done", checkbox.checked);
    });

    deleteBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    left.appendChild(checkbox);
    left.appendChild(text);

    li.appendChild(left);
    li.appendChild(deleteBtn);

    return li;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) {
        input.focus();
        return;
    }

    const item = createTodoItem(value);
    list.appendChild(item);

    input.value = "";
    input.focus();
});