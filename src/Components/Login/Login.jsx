import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const {userWithTwitter , userWithGoogle , loginUser} = useAuth()
    const navigate = useNavigate()
    const [error , setError] = useState(null)
    const handleTwitter = () => {
    userWithTwitter()
    .then(res => {
        console.log(res)
        if(res){
            navigate(location?.state ? location?.state : '/')
        }
    })
   .catch(error => {
    console.log(error.message)
   })
 
}
const handleGoogle = () => {
    userWithGoogle()
    .then(res => {
        console.log(res)
        if(res){
            navigate(location?.state ? location?.state : '/')
        }
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
            }
        })
        .catch(error => {
            console.error(error.message)
            setError("Your email or password may be invalid")
        })
    }
 
    }
    return (
        <div   className=" bg-[#fda3c4] flex justify-center items-center h-[130vh] 2xl:h-screen ">
            <div className="bg-white  drop-shadow-xl shadow-xl lg:w-4/12 md:6/12 w-10/12 m-auto my-10 ">
            <div className="py-8 px-8 rounded-xl ">
                <h1 className="font-medium text-2xl mt-3 spacing text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-6">
                    <div className="my-5 text-sm spacing 2xl:text-lg">
                        <label htmlFor="username" className="block text-black">Email</label>
                        <input type="email" {...register("email" , {required:true} )}
                         autoFocus id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Your Email" />
                         {errors.email && <span className="text-red-600">Your email is required</span>}
                        <span className="text-red-600">{error}</span>
                    </div>
                    <div className="my-5 spacing text-sm 2xl:text-lg">
                        <label  htmlFor="password" className="block text-black">Password</label>
                        <input type="password"  {...register("password" , {required:true} )} id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        {errors.password && <span className="text-red-600">Your password is required</span>}
                        <span className="text-red-600">{error}</span>
                       
                    </div>

                    <button className="block text-center text-sm 2xl:text-lg spacing bg-[#fda3c4] p-3 duration-300 rounded-sm hover:bg-[#eb85aa] w-full">Login</button>
                </form>

                 <div className="flex md:justify-between justify-center items-center mt-10">
                    <div style={{height: "1px"}} className="bg-gray-300 md:block hidden w-4/12"></div>
                    <p className="md:mx-2  text-sm 2xl:text-lg font-light text-gray-400"> Login With Social </p> 
                    <div style={{height: "1px"}} className="bg-gray-300 md:block hidden w-4/12"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button onClick={handleGoogle} className="text-center w-full   p-3 duration-300 rounded-sm spacing  text-white bg-blue-900 hover:bg-blue-700">Google</button>
                    </div>
                    <div>
                        <button  onClick={handleTwitter} className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm spacing hover:bg-blue-500">Twitter</button>
                    </div>
                </div>

                <p className="mt-12 spacing  text-sm 2xl:text-lg text-center font-light text-gray-400"> Do not have an account? <Link to='/signUp' className="text-black font-medium"> Create One </Link>  </p> 

            </div>
        </div>
        </div>
    );
};

export default Login;