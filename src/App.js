// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="Rockets" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
      </Routes>
    </>

  );
}

export default App;
