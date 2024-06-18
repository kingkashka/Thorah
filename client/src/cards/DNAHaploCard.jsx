import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";

function DNAHaploCard(props){
    const {label, title, image, info} = props
    const context = useContext(ThemeContext)

    return(
        <>
        <div className={`DNACard--${context.color}`}>
            <h2>{title}</h2>
            <label>{label}</label>
            <p>{info}</p>
            <img src={image} alt="" />
          </div>
        </>
    )
}
export default DNAHaploCard;