const form = document.querySelector(".todo-header");
const input = document.querySelector("#input");
const list = document.querySelector(".todo-list");


form.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  if (input.value === "") {
    form.classList.toggle("shake-horizontal");
    setTimeout(() => {
      alert('You should enter something!')
      form.classList.toggle("shake-horizontal");
    }, 500);
  } else {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");
    const editableInput = document.createElement("input");
    const saveButton = document.createElement("button");

    li.classList.add("todo-card");

    label.classList.add("label");
    label.innerText = 'Content';

    editableInput.classList.add("content");
    editableInput.type = "text";
    editableInput.value = input.value;

    saveButton.classList.add("save");
    saveButton.innerText = "Save";

    deleteButton.classList.add("todo-button");
    deleteButton.classList.add("todo-button-delete");
    deleteButton.innerText = "-";

    li.appendChild(label);
    li.appendChild(deleteButton);
    li.appendChild(editableInput);
    li.appendChild(saveButton);
    list.appendChild(li);

    saveButton.addEventListener("click", () => {
      editableInput.innerText = editableInput.value;
    });

    deleteButton.addEventListener("click", () => {
      setTimeout(() => {
        list.removeChild(li);
      }, 100);
    });
  }
  input.value = "";

}