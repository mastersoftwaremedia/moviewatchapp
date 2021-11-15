import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star'


const GenMovieCard=({movie})=>{

	return(
	<Card className='my-3 p-3 rounded'>
	
		<Link to={`/movies/${movie.id}`}>
			<Card.Img 
			src={movie.image? 
				movie.image : '/images/img_notFound.png'
			} variant='top' width={175} height={200} />
		</Link>
		
		<Card.Body>
			<Link style={{textDecoration:'none'}} to={`/movies/${movie.id}`}>
				<Card.Title as='div'>
					<strong style={{color:'#004d00'}}>{movie.title}</strong>
				</Card.Title>
			</Link>
			<Card.Text as='div' style={{fontSize:'15px'}}>
				<p><span style={{color:'#008000'}}>Released:</span> {movie.year}</p>
			</Card.Text>
			<Card.Text as='div' style={{fontSize:'15px'}}>
				<p><span style={{color:'#008000'}}>Director & Actors:</span> {movie.crew}</p>
			</Card.Text>
			<Card.Text as='div' style={{fontSize:'15px'}}>
				<p><span style={{color:'#008000'}}>Ratings:</span>{' '}<StarIcon style={{width:'30px', height:'30px', color:'#ff9933'}} />{' '}{movie.imDbRating}</p>
			</Card.Text>
			
		</Card.Body>
	</Card>
	)
}
export default GenMovieCard
/*

		
*/