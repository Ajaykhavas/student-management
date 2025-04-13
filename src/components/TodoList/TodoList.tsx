import { useState } from 'react';
import { Todo } from '../../interfaces/Todo';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() === '') return;
    const newTodo: Todo = {
      id: uuidv4(),
      title: newTask.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>To-Do List</h2>
      <div className='flex mb-4'>
        <input
          type='text'
          placeholder='Enter new task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='flex-1 p-2 border border-gray-300 rounded-md'
        />
        <button
          onClick={handleAdd}
          className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        >
          Add
        </button>
      </div>

      <ul className='list-none p-0'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
