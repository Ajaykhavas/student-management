import { Todo } from '../../interfaces/Todo';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: Props) => {
  const handleDoubleClick = () => {
    const newTitle = prompt('Edit Task:', todo.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      onEdit(todo.id, newTitle.trim());
    }
  };

  return (
    <li
      className={`flex justify-between items-center mb-2 p-2 border-b border-gray-300 rounded-md ${
        todo.completed ? 'bg-gray-200 text-gray-500 line-through' : 'bg-white'
      }`}
    >
      <label className="flex items-center flex-1 cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span onDoubleClick={handleDoubleClick}>{todo.title}</span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
