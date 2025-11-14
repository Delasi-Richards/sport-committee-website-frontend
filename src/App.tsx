import { BrowserRouter as Router, Routes, Route } from 'react-router';

// Pages
import { Homepage, FootballPage, BasketballPage, VolleyballPage } from './pages';
import { TeamsPage, TeamPage, NewsPage, MatchesPage, PlayersPage, PlayerPage } from './pages';

export function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />

        <Route path="/:sport/teams" element={<TeamsPage />} />
        <Route path="/:sport/teams/:teamID" element={<TeamPage />} />

        <Route path="/:sport/news" element={<NewsPage />} />
        <Route path="/:sport/matches" element={<MatchesPage />} />

        <Route path="/:sport/players" element={<PlayersPage />} />
        <Route path="/:sport/players/:playerID" element={<PlayerPage />} />
      </Routes>
    </Router>
  );
};