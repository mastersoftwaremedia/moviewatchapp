import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Image, ListGroup} from 'react-bootstrap'
import axios from 'axios'


const MovieDetails=({match, history})=>{
	const id=match.params.id
	const [movie, setMovie]=useState({})
	const API_KEY=process.env.REACT_APP_API_KEY
	
	
	useEffect(()=>{
		const getMovie=async id=>{
			try{
				const res=await axios.get(`https://imdb-api.com/en/API/Title/${API_KEY}/${id}`, {
				})
				setMovie(res.data)
				//console.log('movieDetails:', res.data)
			}catch(err){
				console.log(err.response)
			}
		}
		getMovie(id)
	},[id, API_KEY])


	return(
		<>
		<Container className='ms-auto' style={{marginTop:'50px'}}>
			<Link to='/' className='btn btn-light my-3'>Go Back</Link>
			{movie && (
			<div >
				<Row className='bottomSpace'>
					<Col md={6}>
						<Image 
							src={movie.image? 
								movie.image : 
								'/images/img_notFound.png'
							} 
							alt={movie._id} 
							fluid 
							width={400} height={350} 
						/> 
					</Col>
					<Col md={6}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{movie.fullTitle}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<span style={{color:'#009900',fontWeight:'700'}}>Directed by:</span>{' '} {movie.directors}
							</ListGroup.Item>			
							<ListGroup.Item>
								<span style={{color:'#009900',fontWeight:'700'}}>Summary:</span> {' '}{movie.plot}
							</ListGroup.Item>			
							<ListGroup.Item>
								<span style={{color:'#009900',fontWeight:'700'}}>Runtime:</span> {' '}{movie.runtimeStr}
							</ListGroup.Item>		
							<ListGroup.Item>
								<span style={{color:'#009900',fontWeight:'700'}}>Directors:</span> {movie.directors}
							</ListGroup.Item>		
							<ListGroup.Item>
								<span style={{color:'#009900',fontWeight:'700'}}>Writers:</span> {movie.writers}
							</ListGroup.Item>									
							<ListGroup.Item>
								<Row lg={6}>
									<Col>
										<span style={{color:'#009900',fontWeight:'700'}}>Genres:</span> {movie.genres}
									</Col>
									<Col>
										<span style={{color:'#009900',fontWeight:'700'}}>Country:</span> {movie.countries}
									</Col>

								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row lg={6}>
									<Col>
										<span style={{color:'#009900',fontWeight:'700'}}>Ratings:</span> {movie.imDbRating}
									</Col>
									<Col>
										<span style={{color:'#009900',fontWeight:'700'}}>Rated:</span> {movie.contentRating}
									</Col>
								</Row>
							</ListGroup.Item>											
						</ListGroup>
					</Col>
				</Row>
				<Row style={{marginTop:'35px', marginBottom:'35px'}}>
					<h4 style={{color:'#009900',fontWeight:'700'}}>Main Characters</h4>
					{movie.actorList && movie.actorList.map((actor, index)=>(
						<Col sm={6} md={4} lg={3} xl={3} className='align-items-stretch d-flex' key={index}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Image 
									src={actor.image? 
										actor.image : '/images/img_notFound.png'
									} variant='top' roundedCircle width={150} height={150} />
								</ListGroup.Item>
								<ListGroup.Item style={{textAlign:'center'}}>
								<span style={{fontWeight:'700'}}>{actor.name}</span>							
								</ListGroup.Item>
								<ListGroup.Item style={{textAlign:'center', marginBottom:'30px'}}>
								<span style={{color:'#009900',fontWeight:'700'}}>As:</span> {actor.asCharacter}							
								</ListGroup.Item>
							</ListGroup>
						</Col>
					))}
				</Row>
			</div>
			)}
		</Container>
		</>
	)
}
export default MovieDetails
/*
{moment(dateToBeFormate).format('DD/MM/YYYY')}


*/