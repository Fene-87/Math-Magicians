import React from 'react';
import './calcPage.css';
import Navigation from '../../components/navigation/navigation';
import Calculator from '../../components/calculator/Calculator';

const CalcPage = () => (
  <div>
    <Navigation />
    <section className="calcContainer">
      <p className="calcText">Lets do some Math!</p>
      <Calculator />
    </section>
  </div>
);

export default CalcPage;
