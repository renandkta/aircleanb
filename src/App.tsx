import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
