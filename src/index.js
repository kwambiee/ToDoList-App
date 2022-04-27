// css files here
import './style.css';

const tasks = [
  { description: 'Mop the house', completed: true, index: 1 },
  { description: 'Clean utensils', completed: false, index: 2 },
  { description: 'Read a book', completed: false, index: 3 },
  { description: 'Prepare Breakfast', completed: true, index: 4 },
];

const listContainer = document.getElementById('list-container');

function showtasks() {
  let chores = '';
  tasks.forEach((element) => {
    chores += `
            <div class="list">
                <input type="checkbox">
                <p>${element.description}</p>
                <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                </a>
            </div>`;
  });
  listContainer.innerHTML = `
<div class="list-head">
<p class="todo">Today's ToDo List</p>
<i id="icon" class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
</div>
<input type="text" class="input" placeholder="Add to your list...">
<div class="list-body">
${chores}</div>
<div class="button">
    <button >Clear all completed</button>
</div>`;
}
showtasks();

window.onload();