import React from "react";
import { useState } from "react";

function VowelCard(props) {
  const { title, info, sound } = props;
  const [showVowel, setShowVowel] = useState(true)  
  return (
      <div className="VCard--front">
        <div className="VCard--title">
        <h1>{title}</h1>
        </div>
        <div className="VCard--info">
        <p>{info}</p>
        </div>
        <div className="VCard--base">
        <h3>{sound}</h3>
        </div>
    </div>
  );
}
export default VowelCard;
