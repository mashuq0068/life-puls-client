import { Box } from "@mui/system";
import { useQuery } from "react-query";
import BioData from "../BioData/BioData";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useAllBioData from "../../Hooks/useAllBioData";


const HowWebsiteWorks = () => {
    const {data : allBioData} = useAllBioData()
    const { data, isLoading, isError } = useQuery("allBioData", allBioData );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data?.slice(startIndex, endIndex);

  useEffect(() => {
    
    setCurrentPage(1);
  }, [data]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      >
        <CircularProgress
          sx={{
            color: "#fda3c4",
          }}
        />
      </Box>
    );
  }

  if (isError) {
    return <div>Error fetching biodata</div>;
  }

  return (
    <div className="flex gap-[5%]">
      {/* ... (your filter form) */}
      <div>
        {/* biodata */}
        <div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {paginatedData?.length === 0 ? (
              <div>
                <p>No Biodata Like that</p>
              </div>
            ) : (
              paginatedData?.map((biodata) => (
                <BioData key={biodata._id} biodata={biodata}></BioData>
              ))
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="text-center font-semibold px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl mb-[5%] bg-[#f178a5] shadow-xl spacing"
            >
              Previous Page
            </button>
            <button
              onClick={handleNextPage}
              disabled={endIndex >= data?.length}
              className="text-center font-semibold px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl mb-[5%] bg-[#f178a5] shadow-xl spacing"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
      <div>
            <h3 className=" text-center font-semibold pb-[1%] spacing text-3xl">All Biodata</h3>
            <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
           <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {data?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
           </div>
    </div>
    </div>
  );
};

export default HowWebsiteWorks;