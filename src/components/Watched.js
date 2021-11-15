import React, {useContext} from 'react'
import {MovieContext} from '../contexts/MovieContext'
import MovieCard from './global/MovieCard'
import {Row, Col, Container, Badge} from 'react-bootstrap'



const Watched=()=>{
	const {watched}=useContext(MovieContext)
	return(
	<>
		<Container className='ms-auto'>			
			<div className="d-flex justify-content-center align-items-center mt-5 mb-2">
				<h1>Watched</h1>
				<Badge pill bg="dark">
				{watched.length} {watched.length===1? 'Movie':'Movies'}
				</Badge>
			</div>
			{watched.length > 0? (
			<>
				<Row>
					{watched.map((movie, index)=>(
						<Col sm={12} md={6} lg={4} xl={3} key={index} className='align-items-stretch d-flex'>
							<MovieCard movie={movie} type='watched' />
						</Col>
					))}
				</Row>
			</>
			) : (
				<div>No movies in watched!</div>
			)}
		</Container>
	</>
	)
}
export default Watched