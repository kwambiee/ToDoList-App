// css files here
import "./style.css";

const listContainer = document.getElementById("list-container");

class ToDoList {
  constructor() {
    this.listArray = JSON.parse(localStorage.getItem("toDoList")) || [];
  }

  // showTaskItem(element) {
  //   return `<div class="list">
  //               <input type="checkbox" name="check">
  //               <p class="taskdescription">${element.description}</p>
  //               <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true" aria-label="${element.index}" id="menu-icon"></i>
  //               </a>
  //           </div>`;
  // }
  // editTaskItem(element) {
  //   return `<div class="list">
  //               <input type="checkbox" name="check">
  //               <input type="text" value="${element.description}">
  //               <a id="menu-icon" ><i class="fa fa-trash-O fa-2x" aria-hidden="true" onclick="${this.editTask(
  //                 element.index
  //               )}"></i>
  //               </a>
  //           </div>`;
  // }

  //show tasks
  showTasks() {
    let chores = "";
    this.listArray.forEach((element) => {
      chores += `${
        element.edit ? this.editTaskItem(element) : this.showTaskItem(element)
      }`;
    });
    listContainer.innerHTML = `
  <div class="list-head">
  <p class="todo">Today's ToDo List</p>
  <i id="icon" class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
  </div>
  <input type="text" class="input" name="addtext" placeholder="Add to your list...">
  <div class="list-body">${chores}</div>
  <div class="button">
    <button >Clear all completed</button>
  </div>`;
  }

  //add a task
  addTask(description) {
    const task = {
      description,
      completed: false,
      index: this.listArray.length + 1,
      edit: false,
    };
    this.listArray = [...this.listArray, task];
    localStorage.setItem("toDoList", JSON.stringify(this.listArray));
    this.showTasks();
  }

  //remove a task
  removeTask(index) {
    this.listArray = this.listArray.filter((l) => l.id !== index);
    this.listArray = this.listArray.map((list, i) => {
      list.index = i + 1;
      return list;
    });
    localStorage.setItem("toDoList", JSON.stringify(this.listArray));
    this.showTasks();
  }

//   //Edit a task
//   editTask(index, description) {
//     this.listArray[index - 1].description = description;
//     localStorage.setItem("toDoList", JSON.stringify(this.listArray));
//     this.showTasks();
//   }
//   //
// }

// const newTask = new ToDoList();
// newTask.showTasks();
// const checkbox = document.querySelector("input[name=check]");
// const taskDescription = document.querySelector(".taskdescription");
// const addList = document.querySelector("input[name=addtext]");
// const menuIcon = document.getElementById("menu-icon");

// // checkbox.addEventListener("change", () => {
// //   taskDescription.style.textDecoration = "line-through";
// // });

// addList.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     if (addList.value) {
//       newTask.addTask(addList.value);
//       newTask.showTasks;
//       addList.value = "";
//     }
//   }
// });

// menuIcon.addEventListener("click", (e) => {
//   console.log(e.target.ariaLabel);
// });

window.onload();
