import React from "react";
import MainNavbar from '../web_components/nav/Header';
import InstructorForm from '../web_components/instructor-login/LoginForm';
import Footer from '../web_components/footer/Footer';

const InstructorLogin = () => {
   return (
      <>
         <MainNavbar />
         <InstructorForm />
         <Footer />
      </>
   );
};

export default InstructorLogin;
