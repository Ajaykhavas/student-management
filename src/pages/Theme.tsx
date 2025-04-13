import { useTheme } from '../context/ThemeContext';
import { themes } from '../styles/theme';

const ThemePage = () => {
  const { setThemeByName } = useTheme();

  return (
    <div>
      <h2>Select Theme</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {Object.keys(themes).map((key) => (
          <button
            key={key}
            onClick={() => setThemeByName(key)}
            style={{
              padding: '10px 20px',
              backgroundColor: themes[key].header,
              color: themes[key].text,
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {themes[key].name.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemePage;
