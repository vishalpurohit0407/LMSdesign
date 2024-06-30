import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MainNavbar from '../web_components/nav/Header';
import SearchCatBanner from '../web_components/search-category/SearchCategBanner';
import SearchCatList from '../web_components/search-category/SearchCategList';
import SearchCatGrid from '../web_components/search-category/SearchCategGrid';
import SearchFilter from '../web_components/search-category/SearchFilterbar';
import { ButtonGroup, Button } from 'react-bootstrap';
import Footer from '../web_components/footer/Footer';

const SearchPg  = () => {
   const [view, setView] = useState('list');
   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

   return (
      <>
         <MainNavbar />
            <div className='search-pg'>
               <SearchCatBanner />
               <div className='search-listing'>
                  <div className='container'>
                     <h2 className='title'>Search <span>Result for “Laravel”</span></h2>
                     <div className='show-result'>
                        <div className='row align-items-center'>
                           <div className='col-md-9'>
                              <p className='mb-0'>Showing <span>1-9</span> of <span>1,294</span> results</p>
                           </div>
                           <div className='col-md-3 text-md-end'>
                              <ButtonGroup>
                                    <Button
                                       onClick={() => setView('list')}
                                       className={view === 'list' ? 'active' : ''}
                                    >
                                       <i className='najahna-list-view'></i>
                                    </Button>
                                    <Button
                                       onClick={() => setView('grid')}
                                       className={view === 'grid' ? 'active' : ''}
                                    >
                                      <i className='najahna-grid-view'></i>
                                    </Button>
                              </ButtonGroup>
                           </div>
                        </div>
                     </div>

                     <div className='result-listing'>
                        <div className='row'>
                           <div className='col-md-3'>
                              <SearchFilter />
                           </div>
                           <div className='col-md-9'>
                              {view === 'list' ? <SearchCatList /> : <SearchCatGrid />}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         <Footer />
      </>
   );
};

export default SearchPg ;
