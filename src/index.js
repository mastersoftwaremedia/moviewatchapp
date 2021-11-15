import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {MovieContextProvider} from './contexts/MovieContext'


ReactDOM.render(
	<MovieContextProvider>
		<App />
	</MovieContextProvider>,
  document.getElementById('root')
)