import React, {useContext} from 'react'
import {MovieContext} from '../../contexts/MovieContext'
import {Button} from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'


const MovieControls=({movie, type})=>{
	const{
		removeMovieFromMylist, addMovieToWatched,
		removeMovieFromWatched, moveToMylist
	}=useContext(MovieContext)
	return(
		<div className="d-flex justify-content-center align-items-center mt-5 mb-2">

		{type==='mylist' && (
		<>
			<Button variant="outline-dark"
				onClick={()=>addMovieToWatched(movie)}
			>
				<VisibilityIcon style={{width:'30px', height:'30px', color:''}} /> 
			</Button>
			<Button variant="outline-dark"
				onClick={()=>removeMovieFromMylist(movie.id)}
			>
				<HighlightOffIcon style={{width:'30px', height:'30px', color:''}} />
			</Button>
		</>
		)}
		
		{type==='watched' && (
		<>
			<Button variant="outline-dark"
				onClick={()=>moveToMylist(movie)}
			>
				<VisibilityIcon style={{width:'30px', height:'30px', color:''}} /> 
			</Button>
			<Button variant="outline-dark"
				onClick={()=>removeMovieFromWatched(movie.id)}
			>
				<HighlightOffIcon style={{width:'30px', height:'30px', color:''}} />
			</Button>
		</>		
		)}
		</div>
	)
}
export default MovieControls