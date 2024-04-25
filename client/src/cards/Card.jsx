import React from "react";
function Card(props) {
  const { image, description, label, title, _id } = props;

  return (
    <>
      <div className="card">
        <img className="card--image" src={image} alt="" />
        <p>{description}</p>
        <label>{label}</label>
        <h2>{title}</h2>
      </div>
    </>
  );
}
export default Card;
