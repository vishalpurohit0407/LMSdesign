import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import ParticipantForm from '../../web_components/participant/login/LoginForm';
import Footer from '../../web_components/footer/Footer';

const ParticipantLogin = () => {
   return (
      <>
         <MainNavbar />
         <ParticipantForm />
         <Footer />
      </>
   );
};

export default ParticipantLogin;
