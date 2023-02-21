import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const navigation = useNavigate();

  const handleHome = () => {
    navigation('/');
  };

  const handleCalc = () => {
    navigation('/calculator');
  };

  const handleQuote = () => {
    navigation('/quote');
  };

  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li className="navitem" onClick={handleHome}>Home</li>
        <li className="navitem" onClick={handleCalc}>Calculator</li>
        <li className="navitem" onClick={handleQuote}>Quote</li>
      </ul>
    </div>
  );
};

export default Navigation;
