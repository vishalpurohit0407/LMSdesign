import React from 'react';
import { IMAGES } from "../../../constant/theme";
import Pagination from 'react-bootstrap/Pagination';

const SearchCategoryGrid  = () => {
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
			{number}
			</Pagination.Item>,
		);
	}
	return (
	<>
		<div className="listing-group grid-view-listing">
			<div className='row'>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 py-3">
					<div className="card filter-search-listing mb-0">
						<div className="card-header">
							<img src={IMAGES.ServiceImg2} alt="Top Trainer Image" className="img-fluid" />
							<label className="prize"><span className="new-price">$80</span><span className="old-price">$99.00</span></label>
						</div>
						<div className="card-body">
							<div className='card-title'>
								<h5>Master Laravel for Beginners & intermediate 2024</h5>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Trainer Name</label>
								<span>John</span>
							</div>
							<div className='d-flex flex-column mb-1'>
								<label className='mb-0'>Total Hours</label>
								<span>1:35 mints (3 lectures) beginner</span>
							</div>
						</div>
						<div className="card-footer">
							<div className="ratings text-center">
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
							<div className='d-flex align-items-center justify-content-center gap-3 mt-1'>
									<label className='mb-0'>Enrolled :</label>
									<span>75</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="pagination text-end">
			<Pagination size="sm" className="ms-auto">
				<Pagination.Prev>Previous</Pagination.Prev>
				{items}
				<Pagination.Next>Next</Pagination.Next>
			</Pagination>
		</div>
	</>
	);
};
export default SearchCategoryGrid;
