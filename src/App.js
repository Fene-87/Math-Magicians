import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CalcPage from './pages/calcpage/CalcPage';
import QuotePage from './pages/quotepage/QuotePage';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalcPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
