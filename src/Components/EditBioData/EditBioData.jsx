import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import useOneBioData from "../../Hooks/useOneBiodata";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const EditBioData = () => {
    const {user} = useAuth()
    const {data} = useOneBioData()
    console.log(data)
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
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm({
        defaultValues:{
          DateOfBirth : data?.DateOfBirth,
          age: data?.age,
          biodataType:data?.biodataType,
          division:data?.division,
          email: data?.email,
          expectedPartnerAge:data?.expectedPartnerAge,
          expectedPartnerHeight : data?.expectedPartnerHeight,
          expectedPartnerWeight:data?.expectedPartnerWeight,
          fathersName:data?.fathersName,
          height:data?.height,
          mobileNumber: data?.mobileNumber,
          mothersName :data?.mothersName,
          name:data?.name,
          occupation: data?.occupation,
          profileLink : data?.profileLink,
          race: data?.race,
          weight : data?.weight

        }
      })
      const onSubmit = (data) => {
       console.log(data)
       if(data){
        axiosSecure.put('/biodata' , data)
        .then(res => {
            console.log(res.data)
            if(res.data){
            handleOpen()
            }
            
        })
       }
      }
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
        {...register("biodataType" , { required: !data ? true : false})}
         
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md" >
            <option value={data?.biodataType}>{data?.biodataType}</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        {(errors.biodataType && !data) && <span className="text-red-600">Biodata Type is required</span>}
      
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
          defaultValue ={data?.name}
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
          defaultValue ={data?.profileLink}
        
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
         
          {...register("DateOfBirth" , {required: !data ? true : false})}
          defaultValue={
            data?.DateOfBirth
          }
           required
          placeholder="Date of Birth"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.DateOfBirth && !data) && <span className="text-red-600">Date of Birth is required</span>}
      </div>
      <div className="mb-5">
        <label
        
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Height
        </label>
        <input
          type="text"
       
          {...register("height" , {required: !data ? true : false})}
          placeholder="Height"
          required
          defaultValue={data?.height}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.height && !data) && <span className="text-red-600">Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Weight
        </label>
        <input
          type="text"
          {...register("weight" , {required: !data ? true : false})}
          defaultValue={data?.weight}
         required
          placeholder="Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.weight && !data ) &&<span className="text-red-600">Weight is required</span>}
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
          defaultValue={data?.age}
          
         
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
          {...register("occupation" , {required: !data ? true : false})}
          defaultValue={data?.occupation}
          required
      
        
         
          placeholder="Occupation"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.occupation && !data )&& <span className="text-red-600">Occupation is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Race
        </label>
        <input
          type="text"
          {...register("race" , {required: !data ? true : false})}
         defaultValue={data?.race}
          required
          placeholder="Race"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {( errors.race && !data) && <span className="text-red-600">Race is required</span>}
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
          defaultValue={data?.fathersName}
         
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
          defaultValue={data?.mothersName}
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
        {...register("division" , {required: !data ? true : false})}
       
         placeholder="Permanent Division Name"
         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md">
        <option value={data?.division}>{data?.division}</option>
        <option value="Dhaka">Dhaka</option>
        <option value="khulna">Khulna</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Chottogram">Chottogram</option>
        <option value="Barisal">Barisal</option>
        <option value="Maymansing">Maymansing</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Rangpur">Rangpur</option>
       </select>
       {(errors.division && !data)&& <span className="text-red-600">Division is required</span>}
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
         defaultValue={data?.expectedPartnerAge}
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
          {...register("expectedPartnerHeight" , {required: !data ? true : false})}
          required
         defaultValue={data?.expectedPartnerHeight}
          placeholder="Expected Partner Height"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.expectedPartnerHeight && !data) && <span className="text-red-600">Expected Partner Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Expected Partner Weight
        </label>
        <input
          type="text"
          {...register("expectedPartnerWeight" , {required: !data ? true : false})}
          defaultValue={data?.expectedPartnerWeight}
         required
         
          placeholder="Expected Partner Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.expectedPartnerWeight&& !data) && <span className="text-red-600">Expected Partner Weight is required</span>}
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
          {...register("mobileNumber" , {required: !data ? true : false})}
          defaultValue={data?.mobileNumber}
         
         required
          placeholder="Mobile Number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {(errors.mobileNumber && !data) && <span className="text-red-600">Mobile Number Height is required</span>}
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
    );
};

export default EditBioData;