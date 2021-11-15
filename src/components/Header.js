import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'


const Header=()=>{
	
	return(
	<header>
		<Navbar collapseOnSelect bg='dark' expand="lg" variant="dark">
			<Container>
	
				<LinkContainer to='/'>		
					<Navbar.Brand>Movies</Navbar.Brand>	
				</LinkContainer>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				
					<Nav className="ms-auto">
				

							<LinkContainer to='/'>		
								<Nav.Link className='ml-4'>
									Top Movies
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/popular'>		
								<Nav.Link className='ml-4'>
									Popular
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/add'>		
								<Nav.Link className='ml-4'>
									Add to MyList
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/mylist'>		
								<Nav.Link className='ml-4'>
									My List
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/watched'>		
								<Nav.Link className='ml-4'>
									Watched
								</Nav.Link>
							</LinkContainer>



					</Nav>
				</Navbar.Collapse>

			</Container>

		</Navbar>
	</header>
	)
}
export default Header
/*

*/