class ToDoList {
  constructor() {
    this.getTasks();
  }

  updateTasks() {
    localStorage.setItem("toDoList", JSON.stringify(this.listArray));
  }

  getTasks() {
    this.listArray = JSON.parse(localStorage.getItem("toDoList")) || [];
  }

  showTaskItem(element) {
    return `<div class="list show">
                <input type="checkbox" name="check">
                <p class="taskdescription">${element.description}</p>
                <a><i class="fa fa-ellipsis-v fa-2x menu-icon" aria-label ="${element.index}" ></i>
                </a>
            </div>`;
  }

  editDescription(element) {
    return `<div class="list edit">
                <input type="checkbox" name="check">
                <input type="text" value="${element.description}">
                <a id="menu-icon" ><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                </a>
            </div>`;
  }

  //show tasks
  showTasks() {
    let chores = "";
    this.listArray.forEach((element) => {
      chores += `${
        element.edit
          ? this.editDescription(element)
          : this.showTaskItem(element)
      }`;
    });
    return chores;
  }

  setEdit(i) {
    const task = this.listArray.find(
      (item) => parseInt(item.index) === parseInt(i)
    );
    task.edit = true;
    this.updateTasks();
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
    this.updateTasks();
  }

  //remove a task
  removeTask(index) {
    this.listArray = this.listArray.filter((l) => l.id !== index);
    this.listArray = this.listArray.map((list, i) => {
      list.index = i + 1;
      return list;
    });
    this.updateTasks();
  }

  //Edit a task
  editTask(index, description) {
    this.listArray[index - 1].description = description;
    this.updateTasks();
  }
}

export default ToDoList;
