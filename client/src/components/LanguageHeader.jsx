import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function LanguageHeader() {
    const context = useContext(ThemeContext)
  return (
    <div className={`language--header--${context.color}`}>
      <h1>The Hebrew Language - השפת העברי</h1>
      <h3></h3>
      <p>
        the hebrew language is special indeed. The only known language to have
        been spoken directly between YHWH and the prophets. Yes we understand
        that elohim is the sole creater of everything we know to exist, this is
        including all of the languages known in history. This language is set
        apart and like elohim everything he does in his being and actions is set
        apart. We being his people are destined to be set apart as well and one
        of the first crucial steps in this process is understanding the
        language.
      </p>
      <h3>Yiddish & Ladino</h3>
      <p>There is this rhetoric that modern hebrew is yiddish and not true hebrew</p>
    </div>
  );
}
export default LanguageHeader;
