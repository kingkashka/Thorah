import HomeHeader from "../components/HomeHeader"
import DNASmallPage from "../smallpages/DNASmallPage"
import '/src/css/DNA.css';

function DNAPage(){
    return(
        <div className="DNABig--Page">
        <HomeHeader />
        <DNASmallPage />
        </div>
    )
}
export default DNAPage