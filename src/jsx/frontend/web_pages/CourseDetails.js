import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MainNavbar from '../web_components/nav/Header';
import CourseDetailsBanner from '../web_components/course-details/CourseDetailBanner';
import CourseSiebar from '../web_components/course-details/CourseSidebar';
import SimilarCourse from '../web_components/course-details/SimilarCourse';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IMAGES, SVGICON } from "../../constant/theme";
import Footer from '../web_components/footer/Footer';

const CourseDetails  = () => {
   const [view, setView] = useState('list');
   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

   return (
      <>
         <MainNavbar />
            <div className='search-pg'>
               <CourseDetailsBanner />
               <div className='course-details'>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-md-8'>
                           <div className='course-name'>
                              <div className='row'>
                                 <div className='col-md-9 col-lg-10'>
                                    <h3>Master Laravel for Beginners & intermediate 2024</h3>
                                    <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod incididun labore et dolore 
                                       magna aliqua. Ut enim ad minim veniam commodo consequat.</p>
                                 </div>
                                 <div className='col-md-3 col-lg-2'>
                                    <label className='price-label'><span>$59</span></label>
                                 </div>
                              </div>

                              <div className='row mt-4'>
                                 <div className='col-md-8'>
                                    <div className='course-duration d-flex'>
                                       <div>
                                          <label>Trainer Name: <span>John</span></label>
                                       </div>
                                       <div>
                                          <label>Total Hours: <span>1:35 mints (3 lectures) beginner</span></label>
                                       </div>
                                    </div>
                                 </div>
                                 <div className='col-md-4 text-end'>
                                    <div className="ratings">
                                       <div class="rating-group">
                                          <input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
                                          <label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                          <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                                          <label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                          <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
                                          <label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                          <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
                                          <label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                          <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
                                          <label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                                          <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
                                       </div>
                                       <span className="ms-2">5.0 (20)</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className='course-description services'>
                              <Tabs
                                 defaultActiveKey="description"
                                 id="justify-tab-example"
                                 className=""
                                 justify
                              >
                                 <Tab eventKey="description"
                                    title={<label className="mb-0">
                                       <span>
                                       Description
                                       </span>
                                       <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                       </label>
                                    }
                                    >
                                    <div className="courses-content">
                                       <h4>Description</h4>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                    </div>
                                 </Tab>
                                 <Tab eventKey="cover-points" 
                                    title={<label className="mb-0">
                                    <span>
                                       Cover Points
                                    </span>
                                    <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                    </label>
                                 }
                                 >
                                    <div className="courses-content">
                                       <h4>Description</h4>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                    </div>
                                 </Tab>
                                 <Tab eventKey="course-content" 
                                    title={<label className="mb-0">
                                    <span>
                                       Course Content
                                    </span>
                                    <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                    </label>
                                 }
                                 >
                                    <div className="courses-content">
                                       <h4>Description</h4>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                    </div>
                                 </Tab>
                                 <Tab eventKey="requirement" 
                                    title={<label className="mb-0">
                                    <span>
                                       Requirement
                                    </span>
                                    <span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
                                    </label>
                                 }
                                 >
                                    <div className="courses-content">
                                       <h4>Description</h4>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et 
                                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex 
                                          ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. 
                                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                       </p>
                                    </div>
                                 </Tab>
                              </Tabs>
                           </div>
                        </div>
                        <div className='col-md-4'>
                           <CourseSiebar />
                        </div>
                     </div>
                  </div>
               </div>
               <div className='similar-course'>
                  <div className='container'>
                     <h3 className='title'>Similar <span>Courses</span></h3>
                     <SimilarCourse />
                  </div>
               </div>
            </div>
         <Footer />
      </>
   );
};

export default CourseDetails ;
