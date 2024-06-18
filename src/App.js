import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import DownloadSection from './DownloadSection';
import Footer from './Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-content">
        <HeroSection />
        <FeatureSection
          image="L1.png"
          title="Conduisez quand vous voulez, générez des revenus sur mesure"
          text="Générez des revenus selon votre propre emploi du temps en effectuant des livraisons, des courses, ou même les deux."
          buttonText1="Commencez"
          buttonText2="Vous avez déjà un compte ? Connectez-vous"
        />
        <FeatureSection
          image="L2.png"
          title="GO Find CAR que vous connaissez, repensé pour les entreprises"
          text="Uber for Business est une plateforme dédiée aux entreprises de toutes tailles, conçue pour gérer leurs déplacements et repas à travers le monde."
          buttonText1="Commencez"
          buttonText2="Découvrez nos solutions"
        />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
