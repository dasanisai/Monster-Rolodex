import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchBox/searchBox.component'

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[ ],
      searchField:''
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
    
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return(
      
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={e=>this.setState({searchField:e.target.value})}/>
     {filteredMonsters.length ? <CardList monsters={filteredMonsters}/>:<p>No Results</p>}
      
    </div>
    )
  };
}

export default App;
