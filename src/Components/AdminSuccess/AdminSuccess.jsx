import { Container, Modal, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


import React from "react";
import { Box } from "@mui/system";

import useSuccessStories from "../../Hooks/useSuccessStories";
import { useState } from "react";
import { GrView } from "react-icons/gr";





const AdminSuccess = () => {

  const { successStories } = useSuccessStories()

  //   const [clickedId , setClickedId] = useState(null)
  const [story, setStory] = useState(null)

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 700,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,

  };

  const handleViewStory = (id) => {

    const filteredStory = successStories?.filter(successStory => parseInt(successStory?.selfBiodataId) === parseInt(id))
    if (filteredStory) {
      setStory(filteredStory)
      handleOpen()



    }



  }
  

  if (successStories) {
    return (
      <>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            {/* <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
           story!
         </Typography> */}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {story?.map(oneStory =>
                <>
                  <div className='details-picture w-max mx-auto drop-shadow-xl shadow-xl shadow-black'>
                    <img className='details-profile w-max mx-auto drop-shadow-xl shadow-xl shadow-black' src={oneStory?.image} alt="" />
                  </div>
                  <p className=" text-center 2xl:text-lg spacing mt-[5%]">Marriage Date : {oneStory?.marriageDate}</p>
                  <div className="w-max mx-auto mt-[2%] mb-[5%]">
                    <Box
                      sx={{
                        '& > legend': { mt: 2, width: 'max-content', marginLeft: 'auto', marginRight: 'auto' },
                      }}
                    >


                      <Rating name="read-only" sx={{ width: 'max-content', marginLeft: 'auto', marginRight: 'auto' }} value={oneStory?.reviewStars} readOnly />

                    </Box>
                  </div>
                  <p className='w-[60%] mx-auto 2xl:text-lg spacing text-left md:text-center'><span className='font-semibold'>Story : </span> {oneStory?.successStory}</p>

                </>


              )}
            </Typography>
          </Box>
        </Modal>

        <Container sx={{ display: 'flex', justifyContent: 'center', marginLeft: '10%' }}>
          <TableContainer sx={{ width: 'max-content', marginLeft: 'auto', marginRight: 'auto' }} component={Paper}>
            <Table sx={{ minWidth: 650, fontSize: '16px', width: '60vw', marginTop: '2%' }} aria-label="simple table">
              <TableHead>
                <TableRow>

                  <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '16px', fontWeight: 'bold' }, fontWeight: 'bold' }} align="center">Male Biodata Id</TableCell>



                  <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '16px', fontWeight: 'bold' }, fontWeight: 'bold' }} align="center">Female Biodata Id</TableCell>

                  <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '16px', fontWeight: 'bold' }, fontWeight: 'bold' }} align="center">View Story</TableCell>






                </TableRow>
              </TableHead>
              <TableBody>









                {successStories?.map((successStory) =>
                  <TableRow
                    key={successStory?._id}

                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 }, fontSize: '19px',
                      '@media (min-width: 1700px)': {
                        fontSize: '19px',
                      },
                    }


                    }
                  >
                    <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '17px' }, color: 'gray', letterSpacing: '1px' }} align="center">{successStory?.gender === "Male" ? successStory?.selfBiodataId : successStory?.partnerBiodataId
                    }</TableCell>
                    <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '17px' }, color: 'gray', letterSpacing: '1px' }} align="center">{successStory?.gender !== "Male" ? successStory?.selfBiodataId : successStory?.partnerBiodataId}</TableCell>
                    <TableCell sx={{ '@media (min-width: 1700px)': { fontSize: '17px' }, color: 'gray', letterSpacing: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} align="center">

                      <button onClick={() => {
                        handleViewStory(successStory?.selfBiodataId)
                        // setClickedId(successStory?.selfBiodataId)
                      }}
                      className="hover:shadow-form  bg-gradient-to-r from-rose-500 flex items-center gap-2 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl shadow-xl rounded-lg outline-none"><GrView />View Story</button>

                    </TableCell>

                  </TableRow>
                )}



              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
};

export default AdminSuccess;