import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import '/src/css/luminary.css'
function LuminaryHeader() {
  const context = useContext(ThemeContext)

  return (
    <div className={`luminary--header--${context.color}`}>
        <h1>Heavenly Luminaries</h1>
      <p>
        In the book of heavenly luminaries we get the understanding of all the
        host of heaven and their ordinances that has been commanded to them by
        YHWH... Enoch was given a detailed description of the luminaries that
        circle the earth and how they navigate the firmament. with a detailed
        and entricate breakdown we gain a better understanding of the world we
        live in through the eyes of The Elohim (YHWH)..
      </p>
    </div>
  );
}
export default LuminaryHeader
