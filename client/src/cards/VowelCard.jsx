import React from "react";
import { useState } from "react";

function VowelCard(props) {
  const { title, info } = props;
  const [showVowel, setShowVowel] = useState(true)  
  return (
      <div className="VCard--front">
        <h1>{title}</h1>
        <p>{info}</p>
    </div>
  );
}
export default VowelCard;
