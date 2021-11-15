import React, {useContext} from 'react'
import {MovieContext} from '../../contexts/MovieContext'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const AddResCard=({movie})=>{
	const {
		addMovieToMylist, mylist,
		addMovieToWatched, watched
	}=useContext(MovieContext)
	
	let storedMine=mylist.find(w=>w.id===movie.id)
	let storedWatched=watched.find(w=>w.id===movie.id)
	
	const mylistDisabled=storedMine ? 
		true : storedWatched ?
			true : false
			
	const watchedDisabled=storedWatched ? true : false
			
	return(
	<Card className='my-3 p-3 rounded movie-card'>
		<Card.Img 
			src={movie.image? 
				movie.image : '/images/img_notFound.png'
			} variant='top' width={100} height={550} />
		<Card.Body>
			<Link style={{textDecoration:'none'}} to={`/movies/${movie.id}`}>
				<Card.Title as='div'>
					<strong style={{color:'#004d00'}}>{movie.title}</strong>
				</Card.Title>
			</Link>
			<Card.Text as='div' style={{fontSize:'15px'}}>
				<p><span style={{color:'#008000'}}>Released:</span> {movie.description}</p>
			</Card.Text>
			
			<Card.Text as='div' style={{fontSize:'15px'}} className='d-flex justify-content-between align-items-center'>
				<Button variant="outline-dark"
					disabled={mylistDisabled}
					onClick={()=>addMovieToMylist(movie)}
				>
					Add to MyList
				</Button>
				<Button variant="outline-dark"
					disabled={watchedDisabled}
					onClick={()=>addMovieToWatched(movie)}
				>
					Add to Watched
				</Button>
			</Card.Text>
			
		</Card.Body>
	</Card>	
	)
}
export default AddResCard