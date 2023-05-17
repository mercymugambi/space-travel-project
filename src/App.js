import { Routes, Route } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
