import React,{useState} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { IMAGES, SVGICON } from "../../../../constant/theme";


const MyQuizOverview =({classChange}) =>{
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
				<div className="table-responsive global-table mb-4">
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

				<h3 className="title pt-2">Quiz <span>Overview</span></h3>
				<div className="table-responsive global-table">
					<Table bordered>
						<thead>
							<tr>
								<th>No</th>
								<th>Question</th>
								<th>Given Answers</th>
								<th>Correct Answers</th>
								<th>Result</th>
								<th>Total Marks</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Has Angular been fully supported by all browsers?</td>
								<td>True</td>
								<td>False</td>
								<td><span className="badge fail">Incorrect</span></td>
								<td>1</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Has Angular been fully supported by all browsers?</td>
								<td>True</td>
								<td>False</td>
								<td><span className="badge fail">Incorrect</span></td>
								<td>1</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Has Angular been fully supported by all browsers?</td>
								<td>True</td>
								<td>False</td>
								<td><span className="badge pass">Correct</span></td>
								<td>1</td>
							</tr>
							<tr>
								<td>4</td>
								<td>Has Angular been fully supported by all browsers?</td>
								<td>True</td>
								<td>False</td>
								<td><span className="badge pass">Correct</span></td>
								<td>1</td>
							</tr>
							<tr>
								<td>5</td>
								<td>Has Angular been fully supported by all browsers?</td>
								<td>True</td>
								<td>False</td>
								<td><span className="badge fail">Correct</span></td>
								<td>1</td>
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
export default MyQuizOverview;
