export default function MovieReducer(state, action){
	switch(action.type){
		case 'ADD_MOVIE_TO_MYLIST':
			return{
				...state,
				mylist:[action.payload, ...state.mylist]
			}
		case 'REMOVE_MOVIE_FROM_MYLIST':
			return{
				...state,
				mylist:state.mylist.filter(movie=>movie.id !== action.payload)
			}
		/////////////////////////////////////////
		case 'ADD_MOVIE_TO_WATCHED':
			return{
				...state,
				mylist:state.mylist.filter(movie=>(
					movie.id !== action.payload.id
				)),
				watched:[action.payload, ...state.watched]
			}		
		case 'REMOVE_MOVIE_FROM_WATCHED':
			return{
				...state,
				watched:state.watched.filter(movie=>movie.id !== action.payload)
			}
		case 'MOVE_TO_MYLIST':
			return{
				...state,
				watched:state.watched.filter(movie=>movie.id !== action.payload.id),
				mylist:[action.payload, ...state.mylist]
			}		
		default:
			return state
	}
}