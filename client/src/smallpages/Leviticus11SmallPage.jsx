import "/src/css/NonKosher.css";
import React from "react";
import Header from "../components/Header.jsx";
import BeastHeader from "/src/components/BeastHeader.jsx";
import FlyerHeader from "../components/FlyerHeader.jsx";
import CreeperHeader from "/src/components/CreeperHeader.jsx";
import OnFourAnimals from "../components/onFour.jsx";
import Card from "../cards/Card.jsx";
import LilCard from "../cards/LilCard.jsx";
import beastData from "../componentData/beastCardData.js";
import flyerCardData from "../componentData/flyerCardData.js";
import creeperData from "../componentData/creepersCardData.js";
import creeperOnFoursData from "../componentData/creepersOnEarth.js";
import HomeHeader from "../components/HomeHeader.jsx";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Footer from "../components/Footer.jsx";

function Leveticus11SmallPage() {
  const context = useContext(ThemeContext);

  const renderFlyerCard = flyerCardData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));
  const renderBeastCard = beastData.map((animal) => (
    <Card
      image={animal.image}
      title={animal.title}
      description={animal.description}
      label={animal.label}
    />
  ));
  const renderCreeperCard = creeperData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));
  const renderCreeperOnFourCard = creeperOnFoursData.map((animal) => (
    <LilCard
      image={animal.image}
      title={animal.title}
      label={animal.label}
      transliteration={animal.transliteration}
    />
  ));

  return (
    <>
      <div className={`uncleanAnimals--page--${context.color}`}>
        <Header />
        <BeastHeader />
        <div className="card--container">{renderBeastCard}</div>
        <FlyerHeader />
        <div className="lilCardContainer">{renderFlyerCard}</div>
        <CreeperHeader />
        <div className="creeperCardContainer">{renderCreeperCard}</div>
        <OnFourAnimals />
        <div className="lilCardContainer">{renderCreeperOnFourCard}</div>
      </div>
    </>
  );
}
export default Leveticus11SmallPage;