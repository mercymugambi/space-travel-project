import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './components/missions';
import Rockets from './components/rockets';

function App() {
  return (
    <BrowserRouter>
      <Routes path="./" element={<Navigation />}>
        <Route index path="Rockets" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="*" element={<div>Error! Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
