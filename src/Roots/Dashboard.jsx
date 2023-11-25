import { NavLink } from "react-router-dom";
import swal from "sweetalert2";



const Dashboard = () => {
  

  const handleLogout = async () => {
    const result = await swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    });
  
    if (result.isConfirmed) {
      await swal.fire({
        title: 'Logged Out!',
        text: 'You have been logged out.',
        icon: 'success'
      });
  
      // Perform your logout logic here
    }
  };
    return (
        <div className="uppercase  space-y-7 w-[25%] bg-white shadow-black drop-shadow-xl shadow-xl h-screen fixed top-0 ">
            <div className="flex flex-col 2xl:space-y-12 space-y-7 text-base 2xl:text-lg spacing font-bold  ml-[10%]   mt-[30%]">
            <NavLink to='/dashboard/edit'>Edit Biodata</NavLink>
            <NavLink to='/dashboard/view'>View Biodata</NavLink>
            <NavLink to='/dashboard/contactRequest'>My Contact Request</NavLink>
            <NavLink to='/dashboard/favorites'>Favorites Biodata </NavLink>
            <button onClick={handleLogout} className="2xl:text-lg text-left text-base spacing font-bold uppercase" >Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;