import "/src/css/language.css";
import letterData from "../componentData/letterData.js";
import LetterCard from "../cards/LetterCard.jsx"
import Button from "/src/components/Button.jsx";
import HomeHeader from "../components/HomeHeader.jsx";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Footer from "../components/Footer.jsx";
import Home from "./HomePage.jsx";

function Language(props) {

  function playSound(objects, propertyName, propertyValue) {
    const audio = new Audio(letterSoundData[index].sound);
    const playSound = audio.filter(object => object[propertyName] === propertyValue)
    console.log(audio);
    return playSound.play();
  }
  const renderLetterCard = letterData.map((item) => (
    <LetterCard
      playSound={playSound}
      label={item.label}
      image={item.image}
      title={item.title}
      sound={item.sound}
      description={item.description}
      number={item.number}
    />
  ));
  const context = useContext(ThemeContext);
  return (
    <>
    <HomeHeader/>
      <div className={`bigLanguage--page--${context.color}`}>
        <Button />
        <div className={`language--page--${context.color}`}>
          {renderLetterCard}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Language;
