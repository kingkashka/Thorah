import React from "react";
import { AiFillSound } from "react-icons/ai";
import letterSoundData from "../componentData/soundData";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function LetterCard(props) {
  const context = useContext(ThemeContext);
  const [toggle, setToggle] = React.useState(true);
  function display() {
    setToggle((prevState) => !prevState);
  }

  // function playSound() {
  //   const propertyValue = letterSoundData.map(item => item.sound)
  //   const filteredSounds = letterSoundData.filter(
  //     object => object["propertyName"] === propertyValue
  //   );
  //   console.log(propertyValue)
  //   return new Audio.propertyValue.play()
  // };

  function playSound(propertyName) {
    // Filter the sound data based on the propertyName
    const soundData = letterSoundData.find(
      (item) => item.propertyName === propertyName
    );
    // Check if sound data for the provided propertyName exists
    if (soundData) {
      // Create a new Audio object with the sound file path
      const audio = new Audio(soundData.sound);

      // Play the audio
      audio.play();
    } else {
      console.error(`Sound data for ${propertyName} not found.`);
    }
  }

  return (
    <>
      <div className={`letterCard--container`}>
        <div className="letterCard">
          <div className={`letterCard--front--${context.color}`}>
            <label>{props.label}</label>
            <h2>{props.title}</h2>
            <h3>{props.number}</h3>
          </div>
          <div className={`letterCard--back--${context.color}`}>
            <p>{props.description}</p>

            <AiFillSound
              className={`letterCard--audio--${context.color}`}
              onClick={() => playSound()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default LetterCard;
