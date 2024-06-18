import React from 'react';

function FeatureSection({ image, title, text, buttonText1, buttonText2 }) {
  return (
    <section className="feature-section">
      <div className="feature">
        <img src={image} alt="Feature" />
        <div className="feature-text">
          <h2>{title}</h2>
          <p>{text}</p>
          <button>{buttonText1}</button>
          <button>{buttonText2}</button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
