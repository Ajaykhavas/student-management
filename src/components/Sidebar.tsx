import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const menuItems = [
    { name: 'Theme', path: '/' },
    { name: 'To-Do List', path: '/todo' },
    { name: 'Students', path: '/students' },
  ];

  return (
    <aside
      className='fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] p-6 overflow-y-auto'
      style={{ backgroundColor: theme.sidebar }}
    >
      <nav className='space-y-3'>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded-md text-lg font-medium ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-600'
            }`}
            style={{
              color: location.pathname !== item.path ? theme.text : undefined,
            }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
