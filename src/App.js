import { Routes, Route } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';
import Profile from './components/profile';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
