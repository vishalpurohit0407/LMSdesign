import React from 'react';


const SearchFilter  = () => {
	return (
	<>
		<div className="search-filters">
			{/* Price */}
			<div className='search-filter-card'>
				<div className='filter-card-header'>
					<h5>Price</h5>
				</div>
				<div className='filter-card-body'>
					<ul>
						<li>
							<label class="common-chkbox">Free
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">Paid
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
			{/* End Price */}

			{/* Rating */}
			<div className='search-filter-card'>
				<div className='filter-card-header'>
					<h5>Rating</h5>
				</div>
				<div className='filter-card-body'>
					<ul>
						<li>
							<label class="common-chkbox">4.5 & UP
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">4.0 & UP
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">3.5 & UP
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
			{/* End Rating */}

			{/* Level */}
			<div className='search-filter-card'>
				<div className='filter-card-header'>
					<h5>Level</h5>
				</div>
				<div className='filter-card-body'>
					<ul>
						<li>
							<label class="common-chkbox">All Level
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">Beginner
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">Experts
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
						<li>
							<label class="common-chkbox">Intermediate
								<input type="checkbox" />
								<span class="chkmark"></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
			{/* End Level */}
		</div>
	</>
	);
};
export default SearchFilter;

