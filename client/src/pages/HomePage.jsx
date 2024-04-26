import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import HomeHeader from "../components/HomeHeader";

function HomePage() {
  const context = useContext(ThemeContext);
  return (
    <>
    <HomeHeader />
      <div className={`homePage--${context.color}`}>
        <h1 className="theName">יהוה</h1>
      </div>
    </>
  );
}
export default HomePage;
