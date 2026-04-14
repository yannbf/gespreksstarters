import { useState } from 'react';
import { motion } from 'framer-motion';
import { themes } from './data/cards';
import ThemeSelector from './components/ThemeSelector';
import CardStack from './components/CardStack';
import './App.css';

function App() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  return (
    <div className="app">
      <header className="app-header">
        <motion.h1
          className="app-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          Gespreksstarters
        </motion.h1>
        <p className="app-subtitle">Tik op een kaart om de vertaling te zien</p>
      </header>

      <ThemeSelector
        themes={themes}
        activeTheme={activeTheme}
        onSelect={setActiveTheme}
      />

      <main className="app-main">
        <div className="app-card-area">
          <CardStack theme={activeTheme} />
        </div>
      </main>
    </div>
  );
}

export default App;
