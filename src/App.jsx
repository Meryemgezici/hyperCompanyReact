import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota tanımları */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
export default App
