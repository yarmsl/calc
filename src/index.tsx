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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();