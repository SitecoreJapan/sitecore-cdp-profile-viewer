import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import GuestRef from './routes/GuestRef';
import NotFound from './routes/NotFound';

const App: React.FC = () => {

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestRef/:userId" element={<GuestRef />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
