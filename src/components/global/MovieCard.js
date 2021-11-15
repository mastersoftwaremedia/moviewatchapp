import React from 'react'
import MovieControls from './MovieControls'
import {Card} from 'react-bootstrap'



const MovieCard=({movie, type})=>{

	return(
	<Card className='my-3 p-3 rounded movie-card'>
		<Card.Img 
			src={movie.image? 
				movie.image : '/images/img_notFound.png'
			} variant='top' width={200} height={250} 
		/>
		<MovieControls type={type} movie={movie} />
	</Card>
	)
}
export default MovieCard
/*

		
*/