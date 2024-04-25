import React from "react";
function LilCard(props) {
  const [toggle, setToggle] = React.useState(true);
  function display() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div onClick={display} className="Lilcard">
      <img className="Lilcard--image" src={props.image} alt="" />
      <h2>{toggle ? props.title : props.transliteration}</h2>
      <label>{props.label}</label>
    </div>
  );
}
export default LilCard;
