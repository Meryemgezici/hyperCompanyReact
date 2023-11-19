import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App
