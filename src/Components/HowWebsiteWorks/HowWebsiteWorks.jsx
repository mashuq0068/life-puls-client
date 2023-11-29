

const HowWebsiteWorks = () => {
  return (
    <div>
       <h3 className="md:mt-36 mt-[170vh] spacing text-center 2xl:text-3xl font-bold text-2xl"> How Website Works</h3>
       <p className=" bg-[#f06598] mb-[3%] h-1 mt-[1vh] mx-auto w-[23%]"></p>
       {/* <p className=" bg-[#f06598] mb-[5%] h-1 mt-[1%] mx-auto w-[23%]"></p> */}
       {/* main div */}
       <div className="lg:w-[70%] md:w-[60%] w-[90%] grid-cols-1 mx-auto  grid lg:grid-cols-3 gap-[5%] ">
        {/* one */}
       <div className="spacing text-center 2xl:text-lg">
     
       <p className="rounded-[50%] mb-[10%] w-max mx-auto px-4 py-2 drop-shadow-xl shadow-xl shadow-black bg-[#f06598] ">1</p>
    
         <h3 className="spacing text-center 2xl:text-2xl font-bold text-xl">Login && Find Bio</h3>
         <p className=" bg-[#f06598] mb-[5%]  h-1 mt-[1vh] mx-auto w-[30%]"></p>
         <p className="">First You must have to login. With Out sign Up you can not login. Because the access of the biodata details and the contact information will not given without login.Becuse , these are private pages. Then go to biodatas page and find your partner for you.</p>
       </div>
        {/* one */}
       <div className="spacing text-center 2xl:text-lg">
       <p className="rounded-[50%] mb-[10%] w-max mx-auto px-4 py-2 drop-shadow-xl shadow-xl shadow-black bg-[#f06598] ">2</p>
         <h3 className="spacing text-center 2xl:text-2xl font-bold text-xl">Send Contact Request</h3>
         <p className=" bg-[#f06598] mb-[5%] h-1 mt-[1vh] mx-auto w-[30%]"></p>
         <p>If you go to the biodatas page , you will find all bio.You can filter them as your need.clicking view profile you will see a button for request contact information.As not being premium, If you click on the button you will be sent for CheckOut as a form pattern.</p>
       </div>
        {/* one */}
       <div className="spacing text-center 2xl:text-lg ">
       <p className="rounded-[50%] mb-[10%] w-max mx-auto px-4 py-2 drop-shadow-xl shadow-xl shadow-black bg-[#f06598] ">3</p>
         <h3 className="spacing text-center 2xl:text-2xl font-bold text-xl">CheckOut Or Premium</h3>
         <p className=" bg-[#f06598] mb-[5%] h-1 mt-[1vh] mx-auto w-[30%]"></p>
         <p>You have to check out 500 Tk.Then you can get the contact access.Ohter wise, you can make you as a premium member.Go to dashboard and click on make bio to premium button.If request approved, you can see the contact information directly.</p>
       </div>
       </div>
    </div>
  );
};

export default HowWebsiteWorks;