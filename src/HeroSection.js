import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Allez où vous voulez avec Go.Find.Car</h1>
        <p>Commandez une course, montez à bord et c'est parti.</p>
        <form>
          <input type="text" placeholder="Lieu de prise en charge" />
          <input type="text" placeholder="Saisissez votre destination" />
          <button type="submit">Voir les prix</button>
        </form>
      </div>
      <div className="hero-image">
        <img src="/images/ride.png" alt="Car ride" />
      </div>
    </section>
  );
}

export default HeroSection;
