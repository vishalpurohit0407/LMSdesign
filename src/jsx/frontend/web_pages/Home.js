import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../web_components/nav/Header';
import HomeBanner from '../web_components/home/Banner';
import HowItWorks from '../web_components/home/How-it-works';
import Services from '../web_components/home/Services';
import Trainer from '../web_components/home/Be-trainer';
import TopTraining from '../web_components/home/Top-training';
import Footer from '../web_components/footer/Footer';

const Home = () => {
   return (
      <>
         <MainNavbar />
         <HomeBanner />
         <HowItWorks />
         <Services />
         <Trainer />
         <TopTraining />
         <Footer />
      </>
   );
};

export default Home;
