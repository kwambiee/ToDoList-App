class Storage {
  static get() {
    return localStorage.getItem('toDoList') || [];
  }

  static set(items) {
    localStorage.setItem('toDoList', JSON.stringify(items));
  }
}

export default Storage;
