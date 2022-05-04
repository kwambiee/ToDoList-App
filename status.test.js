import ToDoList from './src/modules/todolist';
jest.mock('./src/modules/todolist');

beforeEach(() => {
  ToDoList.mockClear();
});

describe('Edit, status and delete All items', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const task = new ToDoList();

  test('edit item', () => {
    task.editTask(1, 'edited task');
    expect(global.localStorage.getItem('toDoList')).toEqual(
      JSON.stringify(task.listArray)
    );
  });

  test('status of item', () => {
    task.changeComplete(1);
    expect(global.localStorage.getItem('toDoList')).toEqual(
      JSON.stringify(task.listArray)
    );
  });

  test('clear all completed', () => {
    task.clearCompleted();
    expect(global.localStorage.getItem('toDoList')).toEqual(
      JSON.stringify(task.listArray)
    );
  });
});
