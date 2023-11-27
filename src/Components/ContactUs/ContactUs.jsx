import  { useRef, useState } from 'react';
import { Modal, Typography, Box, Button, TextField, Container, Grid } from '@mui/material';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { TbBrandGmail } from 'react-icons/tb';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_API_KEY
 
      )
      .then(
        (result) => {
          console.log(result);
          if (result?.status === 200) {
            handleOpen();
          }
        },
        (error) => {
          console.log(error.text);
          console.log('Error sending message, try again!');
        }
      );
  };

  const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 50, mb: 2 }} />
          <TbBrandGmail className="text-3xl text-red-700 mb-5" />
          <Typography id="modal-modal-title" variant="h6" align="center" component="h2">
            Thanks for your feedback!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have successfully sent a message via Gmail.
          </Typography>
        </Box>
      </Modal>
      <Container component="main" maxWidth="lg" sx={{ marginTop: '15vh' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'medium', marginBottom: '2vh' }}>
          Contact us
        </Typography>
        <div style={{ background: '#f06598', height: '3px', width: '50%', marginBottom: '5vh' }}></div>

        {/* <form ref={formRef} onSubmit={handleSendMessage}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="name"
                fullWidth
                variant="outlined"
                label="Your name"
               
                sx={{ borderColor: '#f06598', marginBottom: '2vh' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="email"
                fullWidth
                variant="outlined"
                label="Your email"
                sx={{ borderColor: '#f06598',outline:'#f06598', marginBottom: '2vh' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                multiline
                rows={5}
                fullWidth
                variant="outlined"
                label="Your message"
                sx={{ borderColor: '#f06598', marginBottom: '2vh' }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained"  sx={{ marginTop: '2vh', borderRadius: '4px', background: '#f06598', letterSpacing:'3px',  color: 'black' }}>
            Send Message
          </Button>
        </form> */}
        <form ref={formRef} onSubmit={handleSendMessage}>
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <Grid container spacing={3}>
    <Grid item xs={12}  sm={6}>
      <TextField
        type="text"
        name="name"
        fullWidth
        variant="outlined"
        label="Your name"

        sx={{
            borderColor: '#f06598',
            '&:focus': {
              borderColor: '#f06598',
              outline: '#f06598',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#f06598',
              },
            },
            '& .Mui-focused': {
              borderColor: '#f06598',
              outline: '#f06598',
            },
            '& label.Mui-focused': {
              color: '#f06598',
            },
            marginBottom: '2vh',
          }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        type="text"
        name="email"
        fullWidth
        variant="outlined"
        label="Your email"
        sx={{
          borderColor: '#f06598',
          '&:focus': {
            borderColor: '#f06598',
            outline: '#f06598',
          },
          '& label.Mui-focused': {
            color: '#f06598',
          },
          marginBottom: '2vh',
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="message"
        multiline
        rows={5}
        fullWidth
        variant="outlined"
        label="Your message"
        sx={{
            borderColor: '#f06598',
            '&:focus': {
              borderColor: '#f06598',
              outline: '#f06598',
            },
            '& label.Mui-focused': {
              color: '#f06598',
            },
            marginBottom: '2vh',
            
          }}
      />
    </Grid>
  </Grid>
  <Button
    type="submit"
    variant="contained"
    sx={{
      marginTop: '2vh',
      borderRadius: '4px',
      background: '#f06598',
      letterSpacing: '3px',
      color: 'black',
      '&:hover': {
        background: '#f06598', // Hover color
      },
    }}
  >
    Send Message
  </Button>
</form>
      </Container>
    </>
  );
};

export default ContactUs;
