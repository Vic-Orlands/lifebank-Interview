import React, { useState } from 'react';
import classes from './Pagination.module.css';

const Pagination = ({ data, pageLimit, dataLimit }) => {
	const [ pages ] = useState(Math.round(data.length / dataLimit));
	const [ currentPage, setCurrentPage ] = useState(1);

	// console.log(data);

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}

	function goToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}

	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	const getPaginatedData = () => {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	};

	return (
		<div>
			<div className="dataContainer">
				{getPaginatedData().map((post, idx) => (
					<section key={idx} className={classes['single-post']}>
						<h3 className={classes['post-heading']}>
							<span>{post.id}: </span>
							{post.title}
						</h3>
						<p className={classes['post-paragraph']}>{post.body}</p>
					</section>
				))}
			</div>

			<div className={classes['pagination']}>
				{/* previous button */}
				<button
					onClick={goToPreviousPage}
					className={classes['prev'] + ' ' + `${currentPage === 1 ? classes['disabled'] : classes[' ']}`}
				>
					prev
				</button>

				{/* show page numbers */}
				{getPaginationGroup().map((item, index) => (
					<button
						key={index}
						onClick={changePage}
						className={
							classes['paginationItem'] + ' ' + `${currentPage === item ? classes['active'] : null}`
						}
					>
						<span>{item}</span>
					</button>
				))}

				{/* next button */}
				<button
					onClick={goToNextPage}
					className={classes['next'] + ' ' + `${currentPage === pages ? classes['disabled'] : classes[' ']}`}
				>
					next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
