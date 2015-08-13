import __fetch from "isomorphic-fetch";
import React from "react";
import Transmit from "react-transmit";
import { Header } from '../../components/header';
import { Content } from '../../components/content';

/**
 * Main React application entry-point for both the server and client.
 */
class Main extends React.Component {
	/**
	 * Runs on server and client.
	 */
	componentWillMount () {
		if (__SERVER__) {
			console.log("Hello server");
		}

		if (__CLIENT__) {
			console.log("Hello client");
		}
	}

	/**
	 * Runs on server and client.
	 */
	render () {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
		);
	}

}

export default Transmit.createContainer(Main);