import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootPage } from './pages/RootPage';
import { EvaluationsPage } from './pages/EvaluationsPage';
import { EvaluationPage } from './pages/EvaluationPage/EvaluationPage';
import { VersionPage } from './pages/VersionPage/VersionPage';
import { VersionSetup } from './components/Version/VersionSetup';
import { VersionStats } from './components/Version/VersionStats';
import { UserSessions } from './components/Version/UserSessions';
import { Widgets } from './components/Version/Widgets';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootPage />}>
              <Route path="" element={<LandingPage />} />
              <Route path="evaluations" element={<EvaluationsPage />} />
              <Route
                path="evaluations/:evaluationId"
                element={<EvaluationPage />}
              />
              <Route
                path="evaluations/:evaluationId/version/:versionId/"
                element={<VersionPage />}
              >
                <Route path="setup" element={<VersionSetup />} />
                <Route path="stats" element={<VersionStats />} />
                <Route path="user_sessions" element={<UserSessions />} />
                <Route path="widgets" element={<Widgets />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
