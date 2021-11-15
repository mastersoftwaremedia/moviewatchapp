import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import axios from 'axios'
import GenMovieCard from './global/GenMovieCard'
import Pagination from "react-js-pagination"



const Popular=({match})=>{
	const [popularMovies, setPopularMovies]=useState([])
	const [perPage]=useState(8) 
	const [currentPage, setCurrentPage]=useState(1)
	const API_KEY=process.env.REACT_APP_API_KEY



	useEffect(()=>{
		const getPopularMovies=async()=>{
			try{
				const res=await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`)
				setPopularMovies(res.data.items)
				//console.log('popular movies', res.data.items)
			}catch(err){
				console.log(err.response)	
			}
		}	
		getPopularMovies()
	}, [API_KEY])


	//Get current movies
	const indexOfLastMovie=currentPage * perPage
	const indexOfFirstMovie=indexOfLastMovie - perPage
	const currentMovies=popularMovies.slice(indexOfFirstMovie, indexOfLastMovie)
	//console.log('currentMovies: ',currentMovies)
	
  // Change page
  const onPageChange=pageNumber=>setCurrentPage(pageNumber)	


	return(
	<>
		<Container className='ms-auto'>			
			<Link to='/popular' className='btn btn-light my-3'>Go Back</Link>
			<h1>Popular Movies</h1>
			{currentMovies.length > 0? (
			<>
				<Row>
					{currentMovies.map((movie, index)=>(
						<Col sm={12} md={6} lg={4} xl={3} key={index} className='align-items-stretch d-flex'>
							<GenMovieCard movie={movie} />
						</Col>
					))}
				</Row>
				<div className="d-flex justify-content-center align-items-center mt-5 mb-2">
					<Pagination 
						activePage={currentPage}
						itemsCountPerPage={perPage}
						totalItemsCount={popularMovies.length}
						pageRangeDisplayed={5} 
						onChange={onPageChange} 
					/>
				</div>
			</>
			) : (
				<div>No Popular movies in list!</div>
			)}
		</Container>
	</>
	)
}
export default Popular
/*

*/