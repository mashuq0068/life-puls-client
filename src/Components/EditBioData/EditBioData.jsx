import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const EditBioData = () => {
    const {user} = useAuth()
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
       console.log(data)
      }
    return (
      <div className="w-[75vw]">
<div className="flex items-center w-full justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[10%]">
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Biodata Type
        </label>
        <select placeholder="Full Name"
        {...register("biodataType" , {required:true})}
         
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md" >
            <option></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        {errors.biodataType && <span className="text-red-600">Biodata Type is required</span>}
      
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
        
          {...register("DateOfBirth" , {required:true})}
          
          placeholder="Date of Birth"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.DateOfBirth && <span className="text-red-600">Date of Birth is required</span>}
      </div>
      <div className="mb-5">
        <label
        
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Height
        </label>
        <input
          type="number"
       
          {...register("height" , {required:true})}
          placeholder="Height"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.height && <span className="text-red-600">Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Weight
        </label>
        <input
          type="number"
          {...register("weight" , {required:true})}
          
         
          placeholder="Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.height && <span className="text-red-600">Weight is required</span>}
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
          {...register("occupation" , {required:true})}
      
        
         
          placeholder="Occupation"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.occupation && <span className="text-red-600">Occupation is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Race
        </label>
        <input
          type="text"
          {...register("race" , {required:true})}
         
         
          placeholder="Race"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.race && <span className="text-red-600">Race is required</span>}
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
        {...register("division" , {required:true})}
       
         placeholder="Permanent Division Name"
         className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md">
        <option></option>
        <option value="Dhaka">Dhaka</option>
        <option value="khulna">Khulna</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Chottogram">Chottogram</option>
        <option value="Barisal">Barisal</option>
        <option value="Maymansing">Maymansing</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Rangpur">Rangpur</option>
       </select>
       {errors.division && <span className="text-red-600">Division is required</span>}
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
          type="number"
          {...register("expectedPartnerHeight" , {required:true})}
        
          placeholder="Expected Partner Height"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.expectedPartnerHeight && <span className="text-red-600">Expected Partner Height is required</span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        Expected Partner Weight
        </label>
        <input
          type="number"
          {...register("expectedPartnerWeight" , {required:true})}
         
         
         
          placeholder="Expected Partner Weight"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.expectedPartnerWeight && <span className="text-red-600">Expected Partner Weight is required</span>}
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
          {...register("mobileNumber" , {required:true})}
         
         
          placeholder="Mobile Number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
         {errors.mobileNumber && <span className="text-red-600">Mobile Number Height is required</span>}
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

    );
};

export default EditBioData;