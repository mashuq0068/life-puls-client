

const BioData = () => {
    return (
        <div>
           <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
             
              <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" className="w-full h-auto object-cover rounded-lg"/>
              <div className="absolute drop-shadow-xl shadow-xl shadow- bottom-0 left-0 right-0 h-auto bg-black bg-opacity-50 backdrop-blur flex flex-col  justify-center text-white p-4 rounded-b-lg">
                {/* <h1 className="text-2xl font-semibold text-center">Nature Image</h1> */}
              
               <p className="mt-2 spacing ">Biodata Id : 3</p>
                <p className="mt-2 spacing ">Biodata Type : Male</p>
              
               
                <p className="mt-2 spacing ">Division : Dhaka</p>
                <p className="mt-2 spacing ">Age : 32</p>
               
                <p className="mt-2 spacing">Occupation : developer</p>
                <button className="mt-4 px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl  bg-[#f178a5] shadow-xl">View Details</button>
                
                <div className="biodata-picture drop-shadow-xl shadow-lg shadow-[black] absolute left-[30%] -top-[75%]">
                    <img className="biodata-profile " src="https://tse4.mm.bing.net/th?id=OIP.0Et4JWnvRQA7-7_wcW0lmAHaJQ&pid=Api&P=0&h=220" alt="" />
                </div>
              </div>
        </div> 
        </div>
        
    )
};

export default BioData;