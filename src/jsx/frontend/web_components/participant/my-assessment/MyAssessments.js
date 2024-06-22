import React,{useState} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { IMAGES, SVGICON } from "../../../../constant/theme";


const AssessmentSummary =({classChange}) =>{
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
			<section className="assessment-summary my-assessment common-card">
				<div className="table-responsive global-table">
					<Table bordered>
						<thead>
							<tr>
								<th>Assessments Info</th>
								<th>Question</th>
								<th>Total<br/> Marks</th>
								<th>Correct <br/>Answers</th>
								<th>Incorrect <br/>Answers</th>
								<th>Earned <br/>Marks</th>
								<th>Result</th>
								<th>Details</th>
								<th>Download <br/> Certificate </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									March 12, 2024 05:40 PM<br/>
									Course: The<br/>
									Completed Web
								</td>
								<td>2</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td><span className="status fail">1(50%)</span></td>
								<td><span className="badge fail">Fail</span></td>
								<td><span className="badge details">Details</span></td>
								<td><span className="disable download-icon"><i class="najahna-download-icon"></i></span></td>
							</tr>
							<tr>
								<td>
									March 12, 2024 05:40 PM<br/>
									Course: The<br/>
									Completed Web
								</td>
								<td>2</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td><span className="status fail">1(50%)</span></td>
								<td><span className="badge fail">Fail</span></td>
								<td><span className="badge details">Details</span></td>
								<td><span className="download-icon"><i class="najahna-download-icon"></i></span></td>
							</tr>
							<tr>
								<td>
									March 12, 2024 05:40 PM<br/>
									Course: The<br/>
									Completed Web
								</td>
								<td>2</td>
								<td>2</td>
								<td>1</td>
								<td>1</td>
								<td><span className="status pass">1(50%)</span></td>
								<td><span className="badge pass">Pass</span></td>
								<td><span className="badge details">Details</span></td>
								<td><span className="disable download-icon"><i class="najahna-download-icon"></i></span></td>
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
			</section>
		</>
	)
};
export default AssessmentSummary;
