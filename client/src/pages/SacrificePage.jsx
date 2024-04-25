import HomeHeader from "../components/HomeHeader"
import SacrificeHeader from "../components/SacrificeHeader"
import SacrificeSmallPage from "../smallpages/SacrificeSmallPage"
import Footer from "../components/Footer"
import '/src/css/sacrifice.css'

function SacrificePage(){
    return(
        <>
        <HomeHeader />
        <SacrificeHeader />
        <SacrificeSmallPage />
        <Footer />
        </>
    )
}
export default SacrificePage