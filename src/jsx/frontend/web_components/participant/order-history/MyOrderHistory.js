import React,{useState} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IMAGES, SVGICON } from "../../../../constant/theme";


const MyOrderHistory =({classChange}) =>{
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
		{number}
		</Pagination.Item>,
	);
	}
	return(
		<>
			<section className="services order-history">
				<Tabs
					defaultActiveKey="today"
					id="justify-tab-example"
					className=""
				>
					<Tab eventKey="today"
						title={<label className="mb-0">
							<span>
							Today
							</span>
							<span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
							</label>
						}
						>
						<div className="table-responsive global-table">
							<Table bordered>
								<thead>
									<tr>
										<th>Order ID</th>
										<th>Course Name</th>
										<th>Date</th>
										<th>Price</th>
										<th>Status</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
								</tbody>
							</Table>
							<div className="pagination text-end">
								<Pagination size="sm" className="ms-auto">
									<Pagination.Prev>Previous</Pagination.Prev>
									{items}
									<Pagination.Next>Next</Pagination.Next>
								</Pagination>
							</div>
						</div>
					</Tab>
					<Tab eventKey="monthly" 
						title={<label className="mb-0">
						<span>
						Monthly
						</span>
						<span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
						</label>
					}
					>
						<div className="table-responsive global-table">
							<Table bordered>
								<thead>
									<tr>
										<th>Order ID</th>
										<th>Course Name</th>
										<th>Date</th>
										<th>Price</th>
										<th>Status</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
								</tbody>
							</Table>
							<div className="pagination text-end">
								<Pagination size="sm" className="ms-auto">
									<Pagination.Prev>Previous</Pagination.Prev>
									{items}
									<Pagination.Next>Next</Pagination.Next>
								</Pagination>
							</div>
						</div>
					</Tab>
					<Tab eventKey="yearly" 
						title={<label className="mb-0">
						<span>
						Yearly
						</span>
						<span className="arrow"><img src={IMAGES.ArrowUpRight.default} alt="Arrow" /></span>
						</label>
					}
					>
						<div className="table-responsive global-table">
							<Table bordered>
								<thead>
									<tr>
										<th>Order ID</th>
										<th>Course Name</th>
										<th>Date</th>
										<th>Price</th>
										<th>Status</th>
										<th>Download</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status pass">Completed</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
									<tr>
										<td>#2643</td>
										<td>
											Build Responsive Real World Websites with HTML5 and CSS3
										</td>
										<td>March 24, 2024</td>
										<td>$34</td>
										<td><span className="status fail">On Hold</span></td>
										<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
									</tr>
								</tbody>
							</Table>
							<div className="pagination text-end">
								<Pagination size="sm" className="ms-auto">
									<Pagination.Prev>Previous</Pagination.Prev>
									{items}
									<Pagination.Next>Next</Pagination.Next>
								</Pagination>
							</div>
						</div>
					</Tab>
				</Tabs>
			</section>
		</>
	)
};
export default MyOrderHistory;
