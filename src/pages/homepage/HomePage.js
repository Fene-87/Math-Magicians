import React from 'react';
import './homePage.css';
import Navigation from '../../components/navigation/navigation';

const HomePage = () => (
  <div>
    <Navigation />
    <section className="homeContainer">
      <h2 className="homeHeader">Welcome to our page!</h2>
      <p className="homeText">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit soluta nemo
        possimus excepturi aut, dolorem accusantium laborum in ipsa dolore, voluptas perferendis
        illo ullam delectus nulla saepe harum provident error quis. Officia, similique. Perspiciatis
        earum, dolor nulla officiis facilis commodi totam ut non cumque nostrum et sequi beatae
        blanditiis unde ex reiciendis! Quasi, fugit accusamus. Iusto rerum praesentium expedita
        voluptate earum fugiat tempora labore, consequuntur dignissimos hic fuga nesciunt ut,
        saepe odio vitae, dolore sint. Blanditiis deserunt mollitia facere sit.
      </p>

      <p className="homeText">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit soluta nemo
        possimus excepturi aut, dolorem accusantium laborum in ipsa dolore, voluptas perferendis
        illo ullam delectus nulla saepe harum provident error quis. Officia, similique. Perspiciatis
        earum, dolor nulla officiis facilis commodi totam ut non cumque nostrum et sequi beatae
        blanditiis unde ex reiciendis! Quasi, fugit accusamus. Iusto rerum praesentium expedita
        voluptate earum fugiat tempora labore, consequuntur dignissimos hic fuga nesciunt ut,
        saepe odio vitae, dolore sint. Blanditiis deserunt mollitia facere sit.
      </p>
    </section>
  </div>
);

export default HomePage;
