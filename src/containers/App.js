import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ComponentErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=>this.setState({robots:users}));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render(){
        const {robots, searchfield} = this.state 
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
        <h1 className='tc'>Loading</h1>:
             (
                <div className='tc'>
                    <h1 className='f1'>Robo</h1>
                    <SearchBar SearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                );
        }
    }
export default App