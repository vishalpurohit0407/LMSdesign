import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from '../../web_components/nav/Header';
import Sidebar from '../../web_components/participant/dashboard/Sidebar';
import MyWishlist from '../../web_components/participant/wishlist/Wishlist';
import Footer from '../../web_components/footer/Footer';

const Wishlist = () => {
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
                     <div className="dashboard-title d-flex align-items-center justify-content-between">
                        <h3 className="title">Wishlist</h3>
                     </div>
                     <MyWishlist />
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Wishlist;
