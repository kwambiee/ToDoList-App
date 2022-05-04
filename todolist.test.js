import ToDoList from './src/modules/todolist.js';

jest.mock('./src/modules/todolist');

beforeEach(() => {
  ToDoList.mockClear();
});

describe('Add and delete Function', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const task = new ToDoList();

  test('add item', () => {
    task.addTask('July');
    expect(global.localStorage.getItem('toDoList')).toEqual(
      JSON.stringify(task.listArray),
    );
  });

  test('delete item', () => {
    task.removeTask(1);
    expect(global.localStorage.getItem('toDoList')).toEqual(
      JSON.stringify(task.listArray),
    );
  });
});