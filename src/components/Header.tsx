import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const { theme } = useTheme();

  return (
    <header
      className='w-full px-6 py-4 shadow-md bg-white'
      style={{ backgroundColor: theme.header, color: theme.text }}
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Student Dashboard</h1>

        <button
          onClick={toggleSidebar}
          className='md:hidden p-2 bg-blue-600 text-white rounded-md'
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
