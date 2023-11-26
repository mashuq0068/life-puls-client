import { Box } from "@mui/system";
import useAllBioData from "../../Hooks/useAllBioData";
import BioData from "../BioData/BioData";
import { CircularProgress } from "@mui/material";


const AllBioData = () => {
    const {data , isPending} = useAllBioData()
    console.log(data)
    if(isPending){
        return(
            <Box
            sx={{
              display: 'flex',
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          >
            <CircularProgress
              sx={{
                color: '#fda3c4',
              }}
            />
          </Box>
        )
    }
    return (
        <div className="flex">
            <div className="w-[50vw]">
              {/* filter field */}
              <div>
                <form>
                  <label htmlFor="age">Age</label>
                  <select className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-[30%]" >
                    <option></option>
                    <option value="20-25">20-25</option>
                  </select>
                </form>
              </div>
              {/* biodata */}
              <div>

              </div>
            </div>
           <div className="grid grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {data?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
           </div>
        </div>
    );
};

export default AllBioData;