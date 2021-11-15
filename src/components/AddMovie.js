import React, {useState} from 'react'
import {Row, Col, ListGroup, Form, Button} from 'react-bootstrap'
import FormContainer from './global/FormContainer'
import AddResCard from './global/AddResCard'
import axios from 'axios'



const AddMovie=()=>{
	const [query, setQuery]=useState('')
	const	[movieRes, setMovieRes]=useState([])
	const API_KEY=process.env.REACT_APP_API_KEY
	
	const searchHandler=async e=>{
		e.preventDefault()
		console.log(query)
		const res=await axios.get(`https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${query}`)
		console.log('search results', res.data.results)
		if(res.data.results){
			setMovieRes(res.data.results)
		}else{
			setMovieRes([])
		}
	}

	return(
	<>
		<Row>
			<FormContainer>
				<Form onSubmit={searchHandler} className='d-flex'>
					<Form.Control
						type='text' 
						value={query}
						onChange={e=>setQuery(e.target.value)}
						placeholder='Search Movies...'
						className='mr-2'
						aria-label='Search'
					/>
					<Button type='submit' variant='outline-success' className='p-2'>
						Search
					</Button>			
				</Form>
			</FormContainer>
		</Row>
		<Row>
		<Col md={{ span: 6, offset: 3 }} >
		{movieRes.length > 0 && (
			<ListGroup variant='flush'>
			{movieRes.map((movie, index)=>(
				<ListGroup.Item key={index}>
					<AddResCard movie={movie} />
				</ListGroup.Item>
			))}
			</ListGroup>
		)}		
		</Col>
		</Row>
	</>
	)
}
export default AddMovie
/*

*/