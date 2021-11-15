import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Top from './components/Top'
import Popular from './components/Popular'
import MovieDetails from './components/MovieDetails'
import MyList from './components/MyList'
import Watched from './components/Watched'
import AddMovie from './components/AddMovie'



function App() {
  return (
    <Router>
      <Header />
      <div className='py-3'>
				<Switch>
					<Route exact path='/add' component={AddMovie} />				
					<Route exact path='/watched' component={Watched} />				
					<Route exact path='/mylist' component={MyList} />
				
					<Route exact path='/movies/:id' component={MovieDetails} />				
					
					<Route exact path='/popular' component={Popular} />
					<Route exact path='/' component={Top} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
/*

*/