import React, {useContext} from 'react'
import {MovieContext} from '../contexts/MovieContext'
import MovieCard from './global/MovieCard'
import {Row, Col, Container, Badge} from 'react-bootstrap'



const MyList=()=>{
	const {mylist}=useContext(MovieContext)
	return(
	<>
		<Container className='ms-auto'>			
			<div className="d-flex justify-content-center align-items-center mt-5 mb-2">
				<h1>My Movie List</h1>
				<Badge pill bg="dark">
				{mylist.length} {mylist.length===1? 'Movie':'Movies'}
				</Badge>
			</div>
			{mylist.length > 0? (
			<>
				<Row>
					{mylist.map((movie, index)=>(
						<Col sm={12} md={6} lg={4} xl={3} key={index} className='align-items-stretch d-flex'>
							<MovieCard movie={movie} type='mylist' />
						</Col>
					))}
				</Row>
			</>
			) : (
				<div>No movies in my movie list!</div>
			)}
		</Container>
	</>
	)
}
export default MyList