import HomeHeader from "../components/HomeHeader"
import Leveticus11SmallPage from "../smallpages/Leviticus11SmallPage"
import Footer from "../components/Footer"
import { ThemeContext } from "../components/themeContext";
import { useContext } from "react";
import "/src/css/NonKosher.css";

function Leviticus11Page(){
    const context = useContext(ThemeContext)
    return(
        <div className={`kosher--page--${context.color}`}>
        <HomeHeader />
        <Leveticus11SmallPage />
        <Footer />
        </div>
    )
}
export default Leviticus11Page