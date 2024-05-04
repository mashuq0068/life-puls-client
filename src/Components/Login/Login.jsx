import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {
    const { userWithGoogle , loginUser} = useAuth()
   const axiosPublic = useAxiosPublic()

    const navigate = useNavigate()
    const [error , setError] = useState(null)
//     const handleTwitter = () => {
//     userWithTwitter()
//     .then(res => {
//         console.log(res)
       
//             const userInfo = {
//                 email:res?.user?.email,
//                 name:res?.user?.displayName
//               }
//         axiosPublic.post(`/user/${res?.user?.email}`, userInfo)
//             .then(res => {
//                 console.log(res?.data)
//             navigate(location?.state ? location?.state : '/')
//         })
//         // navigate(location?.state ? location?.state : '/')
//     })
//    .catch(error => {
//     console.log(error.message)
//    })
 
// }
const handleGoogle = () => {
    userWithGoogle()
    .then(res => {
        console.log(res)
        if(res?.user){
            const userInfo = {
                email:res?.user?.email,
                name:res?.user?.displayName
              }
            axiosPublic.post(`/user/${res?.user?.email}`, userInfo)
            .then(res => {
                console.log(res?.data)
            navigate(location?.state ? location?.state : '/')
            window.location.reload(false)
        })}
        // navigate(location?.state ? location?.state : '/')
    })
   .catch(error => {
    console.log(error.message)
   })
   }


   const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    setError("")
    console.log(data)
    if(data){
        loginUser(data?.email , data?.password)
        .then(res => {
            console.log(res)
            if(res){
                navigate(location?.state ? location?.state : '/')
               window.location.reload(false)
            }
        })
        .catch(error => {
            console.error(error.message)
            setError("Your email or password may be invalid")
        })
    }
 
    }
    return (
        <div style={{
            backgroundImage: `url("../../../public/images/bg-beautiful.png")`
         }}  className=" flex justify-center items-center h-[100vh] ">
       
          
        <div className=" lg:w-[28vw] md:w-[80vw] w-[90vw] mx-auto my-10 bg-white p-8 rounded-xl shadow-shadow-slate-300">
         <h1 className="text-4xl font-medium">Login</h1>
         <p className="text-slate-500">Hi, Welcome back 👋</p>
    
          <div className="my-5">
            <button onClick={handleGoogle} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" />
             <span>Login with Google</span>
          </button>
         </div>
    
         <form onSubmit={handleSubmit(onSubmit)}  action="" className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input id="email" name="email" type="email"  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" {...register("email" , {required:true} )}/>
                {errors.email && <span className="text-red-600">Your email is required</span>}
                <span className="text-red-600">{error}</span>
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"  {...register("password" , {required:true} )}/>
                {errors.password && <span className="text-red-600">Your password is required</span>}
                <span className="text-red-600">{error}</span>
              </label>
              {/* <div className="flex items-center  flex-row justify-between">
        //         <div>
        //           <label htmlFor="remember flex items-center gap-2">
        //             <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600  mr-2" />
        //             Remember me
        //           </label>
        //         </div>
        //         <div>
        //           <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
        //         </div>
        //       </div> */}
        {/* important */}
        {/* //       {error && <div className=' text-red-600'>{error}</div>} */}
               <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
            {/* important */}
        {/* //       {isLoading && <span className="loading text-white  loading-spinner loading-xs"></span>} */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
               </svg>
               <span>Login</span>
             </button>
             <p className="text-center">Not registered yet?
               <Link to='/signUp' className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
               
                <span>Register now</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
        </div>
      
       
    );
};

export default Login;