import React from 'react';
import './quotePage.css';
import Navigation from '../../components/navigation/navigation';

const QuotePage = () => (
  <div>
    <Navigation />
    <section className="quoteContainer">
      <p className="quoteText">
        Mathematics is not about numbers, equations, computations or algorithms:
        It is about understanding. - William Paul Thurston.
      </p>
    </section>
  </div>
);

export default QuotePage;
