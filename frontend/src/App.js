import { NavBar } from './components/NavBar';
import { VersionsPage } from './pages/VersionsPage';

function App() {
  return (
    <>
      <NavBar />
      <div className="w-4/5 mx-auto">
        <VersionsPage />
      </div>
    </>
  );
}

export default App;

