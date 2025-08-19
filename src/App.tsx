import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Homepage from "./pages/Homepage.js"
import FootballPage from './pages/Football.js';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/football" element={<FootballPage />} />
      </Routes>
    </Router>
  );
};

export default App;