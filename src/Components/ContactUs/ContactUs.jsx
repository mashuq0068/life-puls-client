import emailjs from '@emailjs/browser';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TbBrandGmail } from "react-icons/tb";


const ContactUs = () => {
    const formRef = useRef()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        window.location.reload(false);
    }
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
        
      };
    const handleSendMessage = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_API_KEY
          )
        .then((result) => {
           console.log(result)
            if(result?.status === 200){
                
                handleOpen()
            }
           
        }, (error) => {
            console.log(error.text);
            console.log("error sending message, try again!")
        });

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
        <TbBrandGmail className='text-3xl text-red-700 mb-5' />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
            Thanks for your feedback!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           You have successfully sent message via gmail
          </Typography>
        </Box>
      </Modal>
        <div className="flex min-h-screen items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="text-4xl font-medium spacing">Contact us</h1>
            <p className=" bg-[#f06598]  mb-[5%] h-1 mt-2 w-[50%]"></p>
         
    
            <form ref={formRef} onSubmit={handleSendMessage} className="mt-10">
          
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="name"
                    className= "peer block w-full appearance-none border-0 border-b border-[#f06598] bg-transparent py-2.5 px-0 text-sm text-gray-900 spacing focus:border-[#f06598] focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 2xl:text-base spacing peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f06598] peer-focus:dark:text-[#f06598]">
                    Your name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="email"
                    className="peer block spacing w-full appearance-none border-0 border-b border-[#f06598] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#f06598] focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 2xl:text-base spacing peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f06598] peer-focus:dark:text-[#f06598]">
                    Your email
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows="5"
                    className="peer block spacing w-full appearance-none border-0 border-b border-[#f06598] bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#f06598] focus:outline-none focus:ring-0"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 2xl:text-base spacing peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#f06598] peer-focus:dark:text-[#f06598]">
                    Your message
                  </label>
                </div>
              </div>
              <button type="submit" className="mt-5 rounded-md bg-[#f06598] px-10 py-2 spacing">
                Send Message
              </button>
            </form>
          </div>
        </div>
        </>
      );
};

export default ContactUs;