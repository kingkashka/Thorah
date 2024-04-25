import { useContext } from "react";
import { ThemeContext } from "/src/components/themeContext.jsx";
import Button from "/src/components/Button.jsx";
import HomeHeader from "../components/HomeHeader";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const context = useContext(ThemeContext);
  return (
    <>
    <HomeHeader />
    {/* <Sidebar /> */}
      <div className={`homePage--${context.color}`}>
        {/* <Button /> */}
        <h1 className="theName">יהוה</h1>
      </div>
    </>
  );
}
export default HomePage;
