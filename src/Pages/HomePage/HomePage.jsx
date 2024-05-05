import { useNavigation } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CounterSection from "../../Components/CounterSection/CounterSection";
import Footer from "../../Components/Footer/Footer";
import HowWebsiteWorks from "../../Components/HowWebsiteWorks/HowWebsiteWorks";
import PremiumMembers from "../../Components/PremiumMembers/PremiumMembers";


import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";
import SuccessStory from "../../Components/SuccessStory/SuccessStory";






const HomePage = () => {

 
    return (
        <div className="">
           
           <ProfilePicture></ProfilePicture>
           <Banner></Banner>
           <PremiumMembers></PremiumMembers>
            <HowWebsiteWorks></HowWebsiteWorks>
            <CounterSection></CounterSection>
            <SuccessStory></SuccessStory>
          
           <Footer></Footer>
          
         
        </div>
    );
};

export default HomePage;