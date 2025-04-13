import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Theme from './pages/Theme';
import Todo from './pages/Todo';
import Students from './pages/Students';
import { useTheme } from './context/ThemeContext';
import { useState } from 'react';

const App = () => {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div
        className='h-screen flex flex-col'
        style={{ backgroundColor: theme.background, color: theme.text }}
      >
        <div className='fixed w-full z-10 bg-white shadow-md'>
          <Header toggleSidebar={toggleSidebar} />{' '}
        </div>

        <div className='flex flex-1 pt-16'>
          <div
            className={`${
              isSidebarOpen ? 'block' : 'hidden'
            } md:block fixed md:relative top-0 left-0 w-64 h-full bg-gray-800 p-6 z-20`}
          >
            <Sidebar />
          </div>

          <main className='flex-1 p-6 overflow-auto'>
            <Routes>
              <Route path='/' element={<Theme />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/students' element={<Students />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
