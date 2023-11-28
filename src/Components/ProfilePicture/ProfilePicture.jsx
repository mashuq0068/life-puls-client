import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";


const ProfilePicture = () => {
    const {user} = useAuth()
    const [display , setDisplay] = useState("hidden")
    console.log(user?.photoURL)
    useEffect(()=>{
        const profile = document.getElementById("profile-container")
          profile.addEventListener("mouseover" , function () {
            setDisplay("flex")
          })
        profile.addEventListener("mouseout",  function () {
          setDisplay("hidden")
        })
      },[])
  
      
      
    return (
        <>
       <div id="profile-container" className={` right-[15%]  top-[1%] md:top-[3%] md:right-[80%] cursor-pointer   z-50 fixed lg:top-[1%] lg:right-[5%]`}>
   <div  className="profile-picture  fixed mr-[4%] ">
   {user?.photoURL ? <img className={`rounded-profile`} src={user?.photoURL} alt="" /> : ""}
   </div>
        {/* info */}
   
        </div>
        <div id="user-info" className={`fixed z-50 profile-info  bg-white p-[2%] rounded-lg  ${display}  flex-col lg:text-[10px] text-base 2xl:text-2xl space-y-3  md:w-max  md:left-[10%] left-[12%] lg:left-[70vw] lg:w-[25vw] drop-shadow-xl shadow-xl lg:pl-[2%] pl-[5%] w-[80%]  top-[13vh]  duration-300  mx-auto justify-center `}>
  
  <p className=" text-lg spacing">User Name : {user?.displayName}</p>
  <hr className="" />
  <p className=" text-lg spacing">Email : {user?.email}</p>
  <hr className="" />
  <p className=" text-lg spacing">Last SignIn Time : {user?.metadata?.lastSignInTime}</p>
  <hr className="" />
  <p className=" text-lg spacing">Creation Time : {user?.metadata?.creationTime}</p>
  {/* <Link onClick={handleSignOut} className="btn text-base bg-teal-400 mx-auto  w-[60%] hover:bg-teal-400  2xl:text-xl ">Sign Out</Link> */}
  </div> 
        </>
    );
};

export default ProfilePicture;