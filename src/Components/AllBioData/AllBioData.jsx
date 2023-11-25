import useAllBioData from "../../Hooks/useAllBioData";
import BioData from "../BioData/BioData";


const AllBioData = () => {
    const {data} = useAllBioData()
    console.log(data)
    return (
        <div className="flex">
            <div className="w-[50vw]">

            </div>
           <div className="grid grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {data?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
           </div>
        </div>
    );
};

export default AllBioData;