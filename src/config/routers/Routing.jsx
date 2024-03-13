import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Screen_handling } from "../../screens/Screen_handling";
import { Private_routes } from "./Private_routes";
import { Public_routes } from "./Public_routes";
import { Home } from "../../pages/Home";
import { Donor } from "../../pages/Donor";
import { Donate_blood } from "../../pages/Donate_blood";
import { Slider } from "../../components/Slider";
import { Contact } from "../../pages/Contact";
import { Login } from "../../screens/Login";
import { SignUp } from "../../screens/SignUp";





export const Routing = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      
        <Route path="" element={<Private_routes />}>
        <Route path="/" element={<Home />} />
        <Route path="/donate-blood" element={<Donate_blood />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

          <Route path="/slider" element={<Slider />} />

        </Route>

        <Route path="" element={<Public_routes />}>
          <Route path="account-access" element={<Screen_handling />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
