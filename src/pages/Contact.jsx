import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <strong>Copyright ©</strong>
      <Link color="inherit" href="https://mui.com/">
        <strong>Blood Donation Welfare</strong>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      PhoneNumber: data.get('Phone Number'),
    });
  };

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/174/16/desktop-wallpaper-donating-blood-vectors-illustrations-for-blood-donor.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[400],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
              <AddIcCallIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <strong>Contact</strong>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                 margin="normal"
                 required
                 fullWidth
                 name="Company Name"
                 label="Company Name"
                 type="Company Name"
                 id="Company Name"
                 autoComplete="Company Name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email-Address"
                type=""
                id="Email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Phone-number"
                label="Phone-number"
                type="Phone-number"
                id="Phone-number"
                autoComplete="Phone-number"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <strong>Contact</strong>
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <strong>Emergency-Call: 2030</strong>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                    <strong>Go Back</strong>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}
























































































































































































































// import React from 'react'

// export const Contact = () => {
//   return (
//     <form>
//   <div>
//     <label for="name">Company Name:</label>
//     <input type="text" id="name" name="Company Name" placeholder='Blood Donation Welfare' required/>
//   </div>
//   <div>
//     <label for="name">Phone-Number:</label>
//     <input type="text" id="phone" name="Phone-Number" placeholder='03456753645' required/>
//   </div>
//   <div>
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" placeholder='blooddonationwelfare@gmail.com' required/>
//   </div>
//   <div>
//     <label for="subject">Select OPtion:</label>
//     <select id="subject" name="subject" required>
//       <option value="">Select a Option</option>
//       <option value="Donation Inquiry">Donation Inquiry</option>
//       <option value="Volunteering">Volunteering</option>
//       <option value="Feedback">Feedback</option>
//       <option value="Other">Other</option>
//     </select>
//   </div>
//   <div>
//     <label for="message">Message:</label>
//     <textarea id="message" name="message" rows="4" required></textarea>
//   </div>
//   <button type="submit">Submit</button>
// </form>

//   );
// }




































































































// // import React, { useState } from 'react';

// // export const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     bloodGroup: '',
// //     email: '',
// //     phone: '',
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission (e.g., send data to backend)
// //     console.log(formData);
// //   };

// //   return (
// //     <div>
// //       <h2>Contact a Blood Donation Welfear</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Name"
// //           value={formData.name}
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="text"
// //           name="bloodGroup"
// //           placeholder=""
// //           value={formData.bloodGroup}
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="email"
// //           name="Email"
// //           placeholder="blooddonationwelfare@gmail.com"
// //           value={formData.email}
// //           onChange={handleChange}
// //         />
// //         <input
// //           type="tel"
// //           name="phone"
// //           placeholder="03215693594"
// //           value={formData.phone}
// //           onChange={handleChange}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };
























































































































// // // import React from 'react';


// // // export const Contact = () => {

// // //   return (
// // //     <div>
// // //           <form>
// // //       <label htmlFor="name">Name:</label>
// // //       <input type="text" id="name" name="name" required />
      
// // //       <label htmlFor="email">Email:</label>
// // //       <input type="email" id="email" name="email" required />

// // //       <label htmlFor="Phone Number">Phone Number:</label>
// // //       <input type="Phone Number" id="Phone Number" name="Phone Number" required />
      
// // //       <label htmlFor="message">Message:</label>
// // //       <textarea id="message" name="message" required></textarea>
      
// // //       <button type="submit">Submit</button>
// // //     </form>
// // //     </div>
// // //   );
// // // }
















































// // // // import React from 'react'

// // // // export const Contact = () => {
// // // //   return (
// // // //     <>
     
// // // // </>
// // // //  );
// // // // }




