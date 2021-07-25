import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import NotFound from './pages/404/NotFound';
import Calc from './pages/Calc/Calc';
import reportWebVitals from './reportWebVitals';
import MainLayout from './layouts/MainLayout';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<MainLayout>
			<Router>
				<Switch>
					<Route exact path='/' component={Calc}/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</MainLayout>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();