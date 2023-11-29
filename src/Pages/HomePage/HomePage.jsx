import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import HowWebsiteWorks from "../../Components/HowWebsiteWorks/HowWebsiteWorks";
import PremiumMembers from "../../Components/PremiumMembers/PremiumMembers";


import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";




const HomePage = () => {
    return (
        <div className="">
           <ProfilePicture></ProfilePicture>
           <Banner></Banner>
           <PremiumMembers></PremiumMembers>
            <HowWebsiteWorks></HowWebsiteWorks>
          
           <Footer></Footer>
          
         
        </div>
    );
};

export default HomePage;