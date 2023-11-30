import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import React from "react";
// import useOneBioData from "../../Hooks/useOneBiodata";
import { useQuery } from '@tanstack/react-query';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




const EditBioData = () => {
  const axiosSecure = useAxiosSecure()
    const {user , loading} = useAuth()
    // const [loading , setLoading] = useState(true)
    // const {data , isLoading , isPending} = useOneBioData()
    // console.log(data)
    // console.log(data?.DateOfBirth)
    // const [data , setData] = useState([])
  
    // useEffect(()=>{
    //      axiosSecure.get(`/biodata/${user?.email}`)
    //      .then(res => {
    //       if(res?.data){
    //         setData(res.data)
    //         setLoading(false)
    //       }
    //       setLoading(false)
    //      })
    // },[])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        
      };
      // const {
      //   DateOfBirth,
      //   age,
      //   biodataType,
      //   division,
      //   email,
      //   expectedPartnerAge,
      //   expectedPartnerHeight,
      //   expectedPartnerWeight,
      //   fathersName,
      //   height,
      //   mobileNumber,
      //   mothersName,
      //   name,
      //   occupation,
      //   profileLink,
      //   race,
      //   weight} = data
      
      // const {
      //     register,
      //     handleSubmit,
          
      //     formState: { errors },
      //   } = useForm({
      //     defaultValues:{
      //       DateOfBirth : DateOfBirth,
      //       age: age,
      //       biodataType:biodataType,
      //       division:division,
      //       email: email,
      //       expectedPartnerAge:expectedPartnerAge,
      //       expectedPartnerHeight : expectedPartnerHeight,
      //       expectedPartnerWeight:expectedPartnerWeight,
      //       fathersName:fathersName,
      //       height:height,
      //       mobileNumber: mobileNumber,
      //       mothersName :mothersName,
      //       name:name,
      //       occupation: occupation,
      //       profileLink : profileLink,
      //       race: race,
      //       weight : weight
  
      //     }
        
      //   })
      //   const onSubmit = (data) => {
      //    console.log(data)
      //    if(data){
      //     axiosSecure.put('/biodata' , data)
      //     .then(res => {
      //         console.log(res.data)
      //         if(res.data){
      //         handleOpen()
      //         }
              
      //     })
      //    }
      //   }





  
 
  const {data : biodata   , isPending , isLoading} = useQuery({
    queryKey:['biodata'],
    queryFn  :async() => {
    const response = await axiosSecure.get(`/biodata/${user?.email}`)
    return response?.data
    },
     enabled : !loading
})


 if(isPending || isLoading || loading ) {
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
  
 }

  



    // const {
    //   DateOfBirth,
    //   age,
    //   biodataType,
    //   division,
    //   email,
    //   expectedPartnerAge,
    //   expectedPartnerHeight,
    //   expectedPartnerWeight,
    //   fathersName,
    //   height,
    //   mobileNumber,
    //   mothersName,
    //   name,
    //   occupation,
    //   profileLink,
    //   race,
    //   weight} = data
    
   const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm({
        defaultValues:{
          DateOfBirth : biodata?.DateOfBirth,
          age: biodata?.age,
          biodataType:biodata?.biodataType,
          division:biodata?.division,
          email: biodata?.email,
          expectedPartnerAge:biodata?.expectedPartnerAge,
          expectedPartnerHeight : biodata?.expectedPartnerHeight,
          expectedPartnerWeight:biodata?.expectedPartnerWeight,
          fathersName:biodata?.fathersName,
          height:biodata?.height,
          mobileNumber: biodata?.mobileNumber,
          mothersName :biodata?.mothersName,
          name:biodata?.name,
          occupation: biodata?.occupation,
          profileLink : biodata?.profileLink,
          race: biodata?.race,
          weight : biodata?.weight

        }
      
      })
      const onSubmit = (data) => {
       console.log(data)
       if(data)
        {
        axiosSecure.put('/biodata' , data)
        .then(res => {
            console.log(res.data)
            if(res.data){
            handleOpen()
            }
            
        })
       }
      }
      if(loading){
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
      if(biodata){
    return (
        <>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
            Wow!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           You have successfully published your biodata
          </Typography>
        </Box>
      </Modal>
        <div className="w-[75vw]">
<div className="flex items-center w-full justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={
      handleSubmit(onSubmit)
     
      } className="mt-[10%]">
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Biodata Type
        </label>
        <select placeholder="Full Name"
        {...register("biodataType" , { required: !biodata ? true : false})}
         
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md" >
            <option value={biodata?.biodataType}>{biodata?.biodataType}</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        {(errors.biodataType && !biodata) && <span className="text-red-600">Biodata Type is required</span>}
      
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Name
        </label>
        <input
         {...register("name")}
          type="text"
          defaultValue ={biodata?.name}
          placeholder="Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Profile Image Link
        </label>
        <input
          type="text"
          {...register("profileLink")}
          defaultValue ={biodata?.profileLink}
        
          placeholder="Profile Image Link"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Date of Birth
        </label>
        <input
          type="date"
         
          {...register("DateOfBirth" , {required: !biodata ? true : false})}
          defaultValue={
            biodata?.DateOfBirth
          }
           required
          placeholder="Date of Birth"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.DateOfBirth && !biodata) && <span className="text-red-600">Date of Birth is required</span>}
      </div>
      <div className="mb-5">
        <label
        
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Height
        </label>
        <input
          type="text"
       
          {...register("height" , {required: !biodata ? true : false})}
          placeholder="Height"
          required
          defaultValue={biodata?.height}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.height && !biodata) && <span className="text-red-600">Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Weight
        </label>
        <input
          type="text"
          {...register("weight" , {required: !biodata ? true : false})}
          defaultValue={biodata?.weight}
         required
          placeholder="Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.weight && !biodata ) &&<span className="text-red-600">Weight is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Age
        </label>
        <input
          type="number"
          {...register("age")}
          defaultValue={biodata?.age}
          
         
          placeholder="Age"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Occupation
        </label>
        <input
          type="text"
          {...register("occupation" , {required: !biodata ? true : false})}
          defaultValue={biodata?.occupation}
          required
      
        
         
          placeholder="Occupation"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.occupation && !biodata )&& <span className="text-red-600">Occupation is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Race
        </label>
        <input
          type="text"
          {...register("race" , {required: !biodata ? true : false})}
         defaultValue={biodata?.race}
          required
          placeholder="Race"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {( errors.race && !biodata) && <span className="text-red-600">Race is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Fathers Name
        </label>
        <input
          type="text"
          {...register("fathersName")}
          defaultValue={biodata?.fathersName}
         
          placeholder="Fathers Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Mothers Name
        </label>
        <input
          type="text"
        
          {...register("mothersName")}
          defaultValue={biodata?.mothersName}
          placeholder="Mothers Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Permanent Division Name
        </label>
       <select name="" id=""
        {...register("division" , {required: !biodata ? true : false})}
       
         placeholder="Permanent Division Name"
         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md">
        <option value={biodata?.division}>{biodata?.division}</option>
        <option value="Dhaka">Dhaka</option>
        <option value="khulna">Khulna</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Chottogram">Chottogram</option>
        <option value="Barisal">Barisal</option>
        <option value="Maymansing">Maymansing</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Rangpur">Rangpur</option>
       </select>
       {(errors.division && !biodata)&& <span className="text-red-600">Division is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
      Expected Partner Age
        </label>
        <input
          type="number"
        
          {...register("expectedPartnerAge")}
         defaultValue={biodata?.expectedPartnerAge}
          placeholder="Expected Partner Age"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Expected Partner Height
        </label>
        <input
          type="text"
          {...register("expectedPartnerHeight" , {required: !biodata ? true : false})}
          required
         defaultValue={biodata?.expectedPartnerHeight}
          placeholder="Expected Partner Height"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.expectedPartnerHeight && !biodata) && <span className="text-red-600">Expected Partner Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Expected Partner Weight
        </label>
        <input
          type="text"
          {...register("expectedPartnerWeight" , {required: !biodata ? true : false})}
          defaultValue={biodata?.expectedPartnerWeight}
         required
         
          placeholder="Expected Partner Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.expectedPartnerWeight&& !biodata) && <span className="text-red-600">Expected Partner Weight is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Contact email
        </label>
        <input
          type="email"
          {...register("email")}
         readOnly
         defaultValue={user?.email}
          placeholder="Age"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
       Mobile Number
        </label>
        <input
          type="number"
          {...register("mobileNumber" , {required: !biodata ? true : false})}
          defaultValue={biodata?.mobileNumber}
         
         required
          placeholder="Mobile Number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.mobileNumber && !biodata) && <span className="text-red-600">Mobile Number Height is required</span>}
      </div>
      
    
        <button
       
          className="hover:shadow-form rounded-md bg-[#ec6b9b] py-3 px-8 text-base font-semibold uppercase outline-none"
        >
         Save && publish biodata
        </button>
    
    </form>
  </div>
</div>
</div>
</>
    )}
};

export default EditBioData;