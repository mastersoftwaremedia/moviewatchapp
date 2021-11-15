import React, {createContext, useEffect, useReducer} from 'react'
import MovieReducer from './MovieReducer'


//initialState
const initialState={
	mylist: localStorage.getItem('mylist')?
		JSON.parse(localStorage.getItem('mylist')) : [],
	watched: localStorage.getItem('watched')?
		JSON.parse(localStorage.getItem('watched')) : [],
}

//create context
export const MovieContext=createContext(initialState)

//provider components
export const MovieContextProvider=({children})=>{
	const [state, dispatch]=useReducer(MovieReducer, initialState)
	
	/////////////////////////////
	useEffect(()=>{
		localStorage.setItem('mylist', JSON.stringify(state.mylist))
		localStorage.setItem('watched', JSON.stringify(state.watched))
	},[state])
	/////////////////////////////
	
	//action	
	const addMovieToMylist=movie=>{
		dispatch({type:'ADD_MOVIE_TO_MYLIST', payload:movie})
	}
	const removeMovieFromMylist=id=>{
		dispatch({type:'REMOVE_MOVIE_FROM_MYLIST', payload:id})
	}
	const addMovieToWatched=movie=>{
		dispatch({type:'ADD_MOVIE_TO_WATCHED', payload:movie})		
	}
	const removeMovieFromWatched=id=>{
		dispatch({type:'REMOVE_MOVIE_FROM_WATCHED', payload:id})		
	}
	const moveToMylist=movie=>{
		dispatch({type:'MOVE_TO_MYLIST', payload:movie})
	}
	/////////////////////////////
	return(
		<MovieContext.Provider value={{
			mylist: state.mylist,
			watched: state.watched,
			
			addMovieToMylist, removeMovieFromMylist,
			addMovieToWatched, removeMovieFromWatched,
			moveToMylist
		}}>
			{children}
		</MovieContext.Provider>
	)
}
/*

*/