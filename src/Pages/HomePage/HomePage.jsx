import Banner from "../../Components/Banner/Banner";
import BioData from "../../Components/BioData/BioData";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture";




const HomePage = () => {
    return (
        <div>
           <ProfilePicture></ProfilePicture>
           <Banner></Banner>
           <BioData></BioData>
         
        </div>
    );
};

export default HomePage;