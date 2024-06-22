import React from "react";
import { Link } from "react-router-dom";
import { IMAGES, SVGICON } from "../../../constant/theme";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import MyQuizOverview from '../../web_components/participant/quiz-overview/MyQuizOverview';
import Footer from '../../web_components/footer/Footer';

const QuizOverview = () => {
   return (
      <>
         <MainNavbar />
         <section className="main-dashboard">
            <div className="container">
               <div className="row">
                  <div className="col-md-3">
                     <Sidebar />
                  </div>
                  <div className="col-md-9">
                     <div className="dashboard-title quiz-titlebar d-flex align-items-center justify-content-between">
                        <h4 className="title mb-0">Assessment :<span> The Complete Web Developer Course</span></h4>
                        <button className="theme-btn">Back<span><img src={IMAGES.LeftArrow.default} alt="FileHtml" /></span></button>
                     </div>
                     <MyQuizOverview />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default QuizOverview;
