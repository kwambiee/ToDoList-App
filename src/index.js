// css files here
import "./style.css";
const tasks = [
  { description: "Mop the house", completed: true, index: 1 },
  { description: "Clean utensils", completed: false, index: 2 },
  { description: "Read a book", completed: false, index: 3 },
  { description: "Prepare Breakfast", completed: true, index: 4 },
];

const toDos = document.getElementById("todo-list");

function Showtasks() {
  let chores = "";
  tasks.forEach((element) => {
    chores += `
            <div class="list">
                <input type="checkbox">
                <p>${element.description}</p>
                <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                </a>
            </div>`;
  });
  toDos.innerHTML = chores;
}
Showtasks();
window.onload();
