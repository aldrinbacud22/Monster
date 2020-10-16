import React, {Component} from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/SearchBox/SearchBox.component'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    monsters: [],
    searchField: ''

    }
    // this.handleChange = this.handleChange.bind(this); 1

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => this.setState({
      monsters: res
    }));
  }
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
   
  }

  // handleChange(e) {
  //   this.setState({searchField: e.target.value});
  // } 1
  
  render() {
    const {monsters, searchField} = this.state;
    console.log(searchField)

    const resultMonster = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      
        // <div className="App">
        //   <input type ="search" placeholder ="Search a Monster" onChange = {this.handleChange}/>
        //   <CardList monster= {resultMonster}/>
        // </div> 1
       
        // <div className="App">
        //   <input 
        //   type ="search" 
        //   name ="searchField" 
        //   placeholder ="Search a Monster" 
        //   onChange = {e => this.setState({searchField: e.target.value})}/>

        <div className="App">
          <h1>Monster </h1>
          <SearchBox
            placeholder = 'Search a Monster'
            handleChange = {e => this.setState({searchField: e.target.value})}
          />
          <CardList monster= {resultMonster}/>
        </div>
      );
  }
  
}

export default App;
