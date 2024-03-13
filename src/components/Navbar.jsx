import "../App.css";
import React from 'react'

export const MYNavbar = () => {
  return (
    <nav class="navbar">
  <div class="container">
    <a href="#" class="logo">
      <img src="https://t4.ftcdn.net/jpg/04/42/37/27/360_F_442372738_Robd0QmrKUOdQkZW4TQVJiBEd5krZcxN.jpg" width="90px" height="70px" alt="Blood Donation Welfare Logo" />
      Blood Donation Welfare
    </a>
    <ul class="nav-links">
      <li><a href="/"><strong>Home</strong></a></li>
      <li><a href="/contact"><strong>Contact</strong></a></li>
      <li><a href="/donor"><strong>Donor</strong></a></li>
      <li><a href="/donate-blood"><strong>Donate_Blood</strong></a></li>
      <li><a href="/login"><strong>Logout</strong></a></li>
    </ul>
  </div>
</nav>
  );
}






    // <nav class="navbar">
    // <div class="container">
    //   <a href="#" class="logo">Blood Donation Welare</a>
    //   <img src="" alt="" />
    //   <ul class="nav-links">
    //     <li><a href="/"><strong>Home</strong></a></li>
    //     <li><a href="/contact"><strong>Contact</strong></a></li>
    //     <li><a href="/donor"><strong>Donor</strong></a></li>
    //     <li><a href="/donate-blood"><strong>Donate_Blood</strong></a></li>
    //     <li><a href="/login"><strong>Logout</strong></a></li>
    //   </ul>
    // </div>
    // </nav>










































































































































































// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Contact } from "../pages/Contact"

// export const MYNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">My Website</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/donate-blood">Donate_Blood</Nav.Link>
//             <Nav.Link href="/Donor">Donor</Nav.Link>
//             <Nav.Link href="/contact"><Contact /></Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



//     // <Navbar bg="light" expand="lg">
//     //   <Container>
//     //     <Navbar.Brand href="#home">My Website</Navbar.Brand>
//     //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //     <Navbar.Collapse id="basic-navbar-nav">
//     //       <Nav className="ml-right">
//     //         <Nav.Link href="#home">Home</Nav.Link>
//     //         <Nav.Link href="#about">About</Nav.Link>
//     //         <Nav.Link href="#services">Services</Nav.Link>
//     //         <Nav.Link href="#contact">Contact</Nav.Link>
//     //       </Nav>
//     //     </Navbar.Collapse>
//     //   </Container>
//     // </Navbar>
















































































































































































// // import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import Divider from "@mui/material/Divider";
// // import Drawer from "@mui/material/Drawer";
// // import IconButton from "@mui/material/IconButton";
// // import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemText from "@mui/material/ListItemText";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import Button from "@mui/material/Button";

// // export const Navbar = (props) => {
// //   const drawerWidth = 240;
// //   const navItems = [
// //     "Home",
// //     "Donate Blood",
// //     "Donor",
// //     "Contact",
// //   ];
  
// //     const { window } = props;
// //     const [mobileOpen, setMobileOpen] = React.useState(false);
  
// //     const handleDrawerToggle = () => {
// //       setMobileOpen((prevState) => !prevState);
// //     };
  
// //     const drawer = (
// //       <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
// //         <Typography variant="h6" sx={{ my: 2 }}>
// //           <b>LOGO</b>
// //         </Typography>
// //         <Divider />
// //         <List>
// //           {navItems.map((item) => (
// //             <ListItem key={item} disablePadding>
// //               <ListItemButton sx={{ textAlign: "center" }}>
// //                 <ListItemText primary={item} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Box>
// //     );
  
// //     const container =
// //       window !== undefined ? () => window().document.body : undefined;
  
// //     return (
// //       <>
// //       <Box sx={{ display: "flex" }}>
// //         <CssBaseline />
// //         <AppBar component="nav">
// //           <Toolbar>
// //             <IconButton
// //               color="inherit"
// //               aria-label="open drawer"
// //               edge="start"
// //               onClick={handleDrawerToggle}
// //               sx={{ mr: 2, display: { sm: "none" } }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Typography
// //               variant="h6"
// //               component="div"
// //               sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
// //             >
// //               <b>LOGO</b>
// //             </Typography>
// //             <Box sx={{ display: { xs: "none", sm: "block" } }}>
// //               {navItems.map((item) => (
// //                 <Button key={item} sx={{ color: "#fff" }}>
// //                   {item}
// //                 </Button>
// //               ))}
// //             </Box>
// //           </Toolbar>
// //         </AppBar>
// //         <nav>
// //           <Drawer
// //             container={container}
// //             variant="temporary"
// //             open={mobileOpen}
// //             onClose={handleDrawerToggle}
// //             ModalProps={{
// //               keepMounted: true, // Better open performance on mobile.
// //             }}
// //             sx={{
// //               display: { xs: "block", sm: "none" },
// //               "& .MuiDrawer-paper": {
// //                 boxSizing: "border-box",
// //                 width: drawerWidth,
// //               },
// //             }}
// //           >
// //             {drawer}
// //           </Drawer>
// //         </nav>
// //         {/* <Box component="main" sx={{ p: 3 }}>
// //           <Toolbar />
// //           <Typography>
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
// //             unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
// //             quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
// //             perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
// //             itaque exercitationem, at ab sequi qui modi delectus quia corrupti
// //             alias distinctio nostrum. Minima ex dolor modi inventore sapiente
// //             necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
// //             sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
// //             eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
// //             temporibus beatae doloremque voluptatum doloribus soluta accusamus
// //             porro reprehenderit eos inventore facere, fugit, molestiae ab officiis
// //             illo voluptates recusandae. Vel dolor nobis eius, ratione atque
// //             soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
// //             voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
// //             obcaecati error, delectus quo eius exercitationem tempore. Delectus
// //             sapiente, provident corporis dolorum quibusdam aut beatae repellendus
// //             est labore quisquam praesentium repudiandae non vel laboriosam quo ab
// //             perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt
// //             commodi nihil corrupti cum non fugiat praesentium doloremque
// //             architecto laborum aliquid. Quae, maxime recusandae? Eveniet dolore
// //             molestiae dicta blanditiis est expedita eius debitis cupiditate porro
// //             sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
// //             quibusdam provident. Incidunt tempore vel placeat voluptate iure
// //             labore, repellendus beatae quia unde est aliquid dolor molestias
// //             libero. Reiciendis similique exercitationem consequatur, nobis placeat
// //             illo laudantium! Enim perferendis nulla soluta magni error, provident
// //             repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
// //             suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
// //             Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
// //             commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
// //             eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
// //             ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat
// //             rem repellendus. Voluptates perspiciatis, in pariatur impedit, nam
// //             facilis libero dolorem dolores sunt inventore perferendis, aut
// //             sapiente modi nesciunt.
// //           </Typography>
// //         </Box> */}
// //       </Box>
// //       </>
// //     );
  
// // }