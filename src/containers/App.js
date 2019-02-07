import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


class App extends Component
{	
	constructor()
	{
		super()
		this.state = 
		{
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(responce=> responce.json())
		.then(users => this.setState({ robots: users}));

	}
	onSearchChange = (event) => 
	{	this.setState({ searchfield: event.target.value})
		
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className = 'tc' >
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<Cardlist robots={filteredRobots}/>
				</Scroll>
			</div>
			);
	}
}
export default App;