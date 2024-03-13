import React from 'react';
// import { Nav, Container } from 'react-bootstrap';
import { Footer } from "../components/Footer";
import { SMCard } from "../components/Cards";
import {MYNavbar} from "../components/Navbar"
import { Slider } from '../components/Slider';
import { Link } from '@mui/material';

const Home = () => {
  return (
    <div>
     
     
      {/* <Navbar bg="dark" variant="dark"> */}
        {/* <Container>
          <Nav className="ml-auto">
            <Link to="/">Home</Link>
            <Link to="/donate-blood">Donate Blood</Link>
            <Link to="/donor">Donor</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Container> */}
      <MYNavbar />
      <Slider />
      <div className="container mt-4">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="dono">
                Volunteers Needed to Help Blood Donations
              </h1>
              <h5>
                Volunteer opportunities include supporting blood donations and
                delivering much-needed services to your community.
              </h5>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://thumbs.dreamstime.com/b/young-man-sitting-giving-blood-as-donor-hand-drawn-armchair-clinic-volunteer-over-white-background-vector-illustration-174706727.jpg"
                alt="donation"
              />
            </div>
          </div>
        </div>

        <div className="sub px-5 my-4">
          <div className="row">
            <div className="col-md-3">
              <SMCard
                image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/rapid-pass-homepage.jpg.transform/1288/q82/feature/image.jpeg"
                heading="Start Your RapidPass"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="START NOW"
              />
            </div>
            <div className="col-md-3">
              <SMCard
                image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/donate-blood-eligibility.jpg.transform/1288/q82/feature/image.jpeg"
                heading="Am I Eligible?"
                text="Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more."
                button="LEARN MORE"
              />
            </div>
            <div className="col-md-3">
              <SMCard
                image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/sc_hp_image_v2_copy.jpg.img.jpeg"
                heading="Help Sickle Cell Patients"
                text="Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need"
                button="LEARN MORE"
              />
            </div>
            <div className="col-md-3">
              <SMCard
                image="https://www.redcrossblood.org/content/dam/redcrossblood/home-page-images/Blood_Mobile.jpg.transform/1288/q82/feature/image.jpeg"
                heading="Please Give Blood"
                text="Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need"
                button="START NOW"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-3">
              <div className="flex flex-wrap">
                <Link>
                  <img
                    src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-pos.png"
                    width="100px" height="200px" alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="flex flex-wrap">
                <Link>
                  <img
                    src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-neg.png"
                    width="100px" height="200px" alt=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <br />
            <br />
            <br />
            <img src="https://mmi.edu.pk/wp-content/uploads/2022/03/banner-blood-donation.jpg" height="500px" alt="" />

            <div className="main">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://soodcharityfoundation.org/wp-content/uploads/2023/01/Resolution-To-Donate-Blood-In-2023_Featured-Image.jpg" width="900px" alt="" />
                </div>
                <div className="col-md-6">
                  <img src="https://www.aimsindia.com/wp-content/uploads/2023/06/IMAGE-1.jpg" width="890px" alt="" />
                </div>
              </div>
            </div>

<br />
<br />
<br />

<div className="main">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/2/2021/06/14131816/World-Blood-Donor-Day-2023-01.png" width="900px" height="600px" alt="" />
                </div>
                <div className="col-md-6">
                  <img src="https://static.vecteezy.com/system/resources/previews/014/573/265/original/blood-donor-blood-bag-and-hand-hand-drawn-illustrations-donate-blood-health-care-concept-vector.jpg" width="890px" height="600px" alt="" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div className="main">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1039178164W8333H10000/views/1,width=1200,height=630,appearanceId=839,backgroundColor=F2F2F2/donate-blood-safe-lives-blood-donation-awareness-sticker.jpg" width="900px" height="600px" alt="" />
                </div>
                <div className="col-md-6">
                  <img src="https://www.pr-medicalevents.com/wp-content/uploads/2016/06/post-img.jpg" width="890px" height="600px" alt="" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div className="sub px-5 my-4">
          <div className="row">
            <div className="col-md-3">
              <SMCard
                image="https://post.healthline.com/wp-content/uploads/2022/06/2271154-Gene-Therapy-for-Sick-Cell-Anemia_1296x900-body.png"
                heading="Help Sickle Cell Patients"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Put Information"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://e3.365dm.com/20/09/1600x900/skynews-nhs-van-blood-donation_5097506.jpg?20200915161331"
                heading="Please Give Blood"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Call"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://st2.depositphotos.com/2875507/7393/v/950/depositphotos_73938563-stock-illustration-world-blood-donor-day-concept.jpg"
                heading="Give Blood Save Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Give a Blood"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/plasma-graphic.jpg"
                heading="Blood Is a Part Of Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Put"
              />
            </div>
            </div>
            </div>

<br />
<br />
<br />

<div className="sub px-5 my-4">
          <div className="row">
            <div className="col-md-3">
              <SMCard
                image="https://post.healthline.com/wp-content/uploads/2022/06/2271154-Gene-Therapy-for-Sick-Cell-Anemia_1296x900-body.png"
                heading="Help Sickle Cell Patients"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Put Information"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://e3.365dm.com/20/09/1600x900/skynews-nhs-van-blood-donation_5097506.jpg?20200915161331"
                heading="Please Give Blood"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Call"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://st2.depositphotos.com/2875507/7393/v/950/depositphotos_73938563-stock-illustration-world-blood-donor-day-concept.jpg"
                heading="Give Blood Save Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Give a Blood"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/plasma-graphic.jpg"
                heading="Blood Is a Part Of Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Put"
              />
            </div>
            </div>
            </div>

<br />
<br />
<br />


<div className="sub px-5 my-4">
          <div className="row">
            <div className="col-md-3">
              <SMCard
                image="https://post.healthline.com/wp-content/uploads/2022/06/2271154-Gene-Therapy-for-Sick-Cell-Anemia_1296x900-body.png"
                heading="Help Sickle Cell Patients"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Put Information"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://e3.365dm.com/20/09/1600x900/skynews-nhs-van-blood-donation_5097506.jpg?20200915161331"
                heading="Please Give Blood"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Call"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://st2.depositphotos.com/2875507/7393/v/950/depositphotos_73938563-stock-illustration-world-blood-donor-day-concept.jpg"
                heading="Give Blood Save Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="GO & Give a Blood"
              />
            </div>
            <div className="col-md-3">
            <SMCard
                image="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/plasma-graphic.jpg"
                heading="Blood Is a Part Of Life"
                text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
                button="Go & Put"
              />
            </div>
            </div>
            </div>

<br />
<br />
<br />

            {/* Add the rest of the blood type images here */}
          </div>
        </div>

        <div className="main">
          {/* Additional content with responsive layout */}
        </div>

        <Footer />
      </div>
    
  );
};

export {Home};

















































































































// import React from "react";
// import { Navbar } from "../components/Navbar";
// import { SMCard } from "../components/Cards";
// import { Link } from "@mui/material";
// import { Footer } from "../components/Footer";
// import Slider from "../components/Slider";


// export const Home = () => {
//   return (
//     <>
//       {/* ------------------- START SECTION 01 ------------------- */}
//       <Slider />
//       <div className="main">
//         <Navbar />
//         <br />
//         <br />
//         <br />
//         <br />

//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 ">
//               <h1 className="dono">
//                 Volunteers Needed to Help Blood Donations
//               </h1>
//               <h5>
//                 Volunteer opportunities include supporting blood donations and
//                 delivering much-needed services to your community.
//               </h5>
//             </div>
//             <div className="col-md-6">
//               <img
//                 width={700}
//                 src="https://thumbs.dreamstime.com/b/young-man-sitting-giving-blood-as-donor-hand-drawn-armchair-clinic-volunteer-over-white-background-vector-illustration-174706727.jpg"
//                 alt="donation"
//               />
//             </div>
//           </div>
//         </div>

//         <br />

//         <div className="sub px-5">
//           <div className="row">
//             <div className="col-md-3">
//               <SMCard
//                 image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/rapid-pass-homepage.jpg.transform/1288/q82/feature/image.jpeg"
//                 heading="Start Your RapidPass"
//                 text="Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location."
//                 button="START NOW"
//               />
//             </div>
//             <div className="col-md-3">
//               <SMCard
//                 image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/donate-blood-eligibility.jpg.transform/1288/q82/feature/image.jpeg"
//                 heading="Am I Eligible?"
//                 text="Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more."
//                 button="LEARN MORE"
//               />
//             </div>
//             <div className="col-md-3">
//               <SMCard
//                 image="https://www.redcrossblood.org/content/dam/redcrossblood/rcb/home-page/components/sc_hp_image_v2_copy.jpg.img.jpeg"
//                 heading="Help Sickle Cell Patients"
//                 text="Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need"
//                 button="LEARN MORE"
//               />
//             </div>
//             <div className="col-md-3">
//               <SMCard
//                 image="https://www.redcrossblood.org/content/dam/redcrossblood/home-page-images/Blood_Mobile.jpg.transform/1288/q82/feature/image.jpeg"
//                 heading="Please Give Blood"
//                 text="Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need"
//                 button="START NOW"
//               />
//             </div>
//           </div>

//           <br />
//           <br />
//           <br />

//           <div className="row">
//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-pos.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeA-neg.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeAB-pos.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeAB-neg.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <br />
//           <br />

//           <div className="row">
//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeB-pos.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeB-neg.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeOpos.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div className="flex flex-wrap">
//                 <Link>
//                   <img
//                     src="https://www.lifeservebloodcenter.org/webres/Image/donate-blood/blood-types/blood-typeOneg.png"
//                     width="100px" height="200px" alt=""
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <br /><br />
//       <div>
//         <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kelsey-seybold.com%2Fyour-health-resources%2Fblog%2Fdonating-blood-is-good-for-your-health&psig=AOvVaw3txEaJjUrsRmAUZ4KUnIXG&ust=1710166065647000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCb_qvv6YQDFQAAAAAdAAAAABA4" alt="" />
//       </div>

//       <div className="main">
//         <div className="row">
//           <div className="col-md-6">
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvoicetrustmadurai.org%2Fblood-donation%2F&psig=AOvVaw3txEaJjUrsRmAUZ4KUnIXG&ust=1710166065647000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCb_qvv6YQDFQAAAAAdAAAAABBA" alt="" />
//           </div>
//           <div className="col-md-6">
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstanfordbloodcenter.org%2Fdonate-blood%2Fblood-donation-facts%2F&psig=AOvVaw3txEaJjUrsRmAUZ4KUnIXG&ust=1710166065647000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCb_qvv6YQDFQAAAAAdAAAAABAk" alt="" />
//           </div>
//         </div>
//       </div>

//       <br /><br />

//       <div className="main">
//         <div className="row">
//           <div className="col-md-6">
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvoicetrustmadurai.org%2Fblood-donation%2F&psig=AOvVaw3txEaJjUrsRmAUZ4KUnIXG&ust=1710166065647000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCb_qvv6YQDFQAAAAAdAAAAABBA" alt="" />
//           </div>
//           <div className="col-md-6">
//             <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstanfordbloodcenter.org%2Fdonate-blood%2Fblood-donation-facts%2F&psig=AOvVaw3txEaJjUrsRmAUZ4KUnIXG&ust=1710166065647000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCb_qvv6YQDFQAAAAAdAAAAABAk" alt="" />
//           </div>
//         </div>
//       </div>

//       <br /><br />

//       <div className="main">
//         <div className="row">
//           <div className="col-md-6">
//            <h1>hello</h1>
//           </div>
//           <div className="col-md-6">
//             hello
//           </div>
//         </div>
//       </div>

//       <br />
//       <br />

//       <Footer />

//       {/* ------------------- END SECTION 01 ------------------- */ }
//     </>
//   );
// };
