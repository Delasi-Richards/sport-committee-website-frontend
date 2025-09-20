import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Pages
import Homepage from "./pages/Homepage.js"
import FootballPage from './pages/Football.js';
import BasketballPage from './pages/Basketball.js';
import VolleyballPage from './pages/Volleyball.js';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
      </Routes>
    </Router>
  );
};

export default App;