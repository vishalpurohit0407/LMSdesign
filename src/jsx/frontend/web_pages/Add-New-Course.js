import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MainNavbar from '../web_components/nav/Header';
import AddCourse from '../web_components/add-course/Wizard';
import Footer from '../web_components/footer/Footer';

const StepProgress  = () => {
   return (
      <>
         <MainNavbar />
         <AddCourse />
         <Footer />
      </>
   );
};

export default StepProgress ;
