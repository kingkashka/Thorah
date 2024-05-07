import React from "react";
import { useState } from "react";
function Card(props) {
  const { image, description, label, title, _id } = props;
  const [isActive, setIsActive] = useState(false)

  function flipCard(){
    setIsActive(prevState => !prevState)
  }
  return (
    <>
      <div className="card" onClick={flipCard}>
        <img className={`card--image ${isActive ? "active" : " "}`} src={image} alt="" />
        <p>{description}</p>
        <label>{label}</label>
        <h2>{title}</h2>
      </div>
    </>
  );
}
export default Card;
