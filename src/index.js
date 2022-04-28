// css files here
import "./style.css";
import TodoList from "./modules/todolist.js";
import * as Element from "./modules/elements.js";

const newTask = new TodoList();

const refresh = () => {
  Element.listBody.innerHTML = newTask.showTasks();
};
refresh();

//Event Listeners
Element.addList.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let val = Element.addList.value;
    if (val) {
      newTask.addTask(val);
      Element.addList.value = "";
      refresh();
    }
  }
});

window.document.querySelectorAll(".menu-icon").forEach((menu) => {
  menu.addEventListener("click", (e) => {
    newTask.setEdit(e.target.ariaLabel);
    window.location.reload();
  });
});
