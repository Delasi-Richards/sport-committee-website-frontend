import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Pages
import { Homepage, FootballPage, BasketballPage, VolleyballPage } from './pages';
import { TeamsPage, NewsPage } from './pages';

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
        <Route path="/:sport/teams" element={<TeamsPage />} />
        <Route path="/:sport/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};