import React from "react";
import { useState, useEffect } from "react";
import { AiFillSound } from "react-icons/ai";
import letterSoundData from "../componentData/soundData";
import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function LetterCard(props) {
  const context = useContext(ThemeContext);
  const [activeCard, setActiveCard] = useState(true);

  //   function flipCard(){
  //     setActiveCard(prevState => {
  //       (!prevState){
  //         const cardLink = document.querySelectorAll(".letterCard");
  // cardLink.forEach(card => {
  //   card.addEventListener("click", () => {
  //     // console.log('clcked');
  //     document.querySelector('.active').classList.remove('active')
  //     card.classList.add("active");
  //   })
  // }) 
  //       }
  //     })
  //   }
  useEffect(() => {
    const cardLinks = document.querySelectorAll(".letterCard");

    const handleClick = (event) => {
      const card = event.target;
      const activeElement = document.querySelector('.active');

      if (activeElement) {
        activeElement.classList.remove('active');
      }
      card.classList.add("active");
    };

    cardLinks.forEach(card => {
      card.addEventListener("click", handleClick);
    });

    return () => {
      cardLinks.forEach(card => {
        card.removeEventListener("click", handleClick);
      });
    };
  }, []); 

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

  // function flipCard(){
  //   setActiveCard(prevState => {
  //     !prevState 
  //     console.log(activeCard);
  //   })
  // }
  const cardLink = document.querySelectorAll(".letterCard");
  cardLink.forEach(card => {
    card.addEventListener("click", () => {
      // console.log('clcked');
      document.querySelector('.active').classList.remove('active')
      card.classList.add("active");
    })
  }) 

//   const cardContainer = document.querySelector('.letterCard--container'); // Assuming there is a parent container for all letter cards

// cardContainer.addEventListener('click', (event) => {
//   const card = event.target.closest('.letterCard');
  
//   if (card && cardContainer.contains(card)) {
//     const activeCard = document.querySelector('.active');
//     if (activeCard) {
//       activeCard.classList.remove('active');
//     }
//     card.classList.add('active');
//   }
// });
// ${activeCard === card.id ? 'active' : ''}`}

  return (
    <>
      <div className={`letterCard--container`}>
        <div className='letterCard'>
          <div className={`letterCard--front--${context.color}`}>
            <label>{props.label}</label>
            <h2>{props.title}</h2>
            <h3>{props.number}</h3>
          </div>
          <div className={`letterCard--back--${context.color}`}>
            <p>{props.description}</p>

            {/* <AiFillSound
              className={`letterCard--audio--${context.color}`}
              onClick={() => playSound()}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default LetterCard;
