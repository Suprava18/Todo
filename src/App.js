import React,{Component} from 'react';
import SearchField from './SearchField';
import TodoList from './TodoList';
import './App.css';

class App extends Component{
  constructor()
  {
    super()
    this.state={
      title:"Todo List",
      newItem:"",
      list:[]
    }
  }

  updateInput=(key,value)=>{
    //update react state
    this.setState({[key]:value});
  };

 addItem=()=>{
   //create a new item with uniuqe id
   const newItem={
     id:1+Math.random(),
     value:this.state.newItem.slice()
   };

    //copy current list of items
   const list=[...this.state.list];

   //add the new item to the list
   list.push(newItem);

   //update state with new list, reset the new item input
   this.setState({list,newItem:""});
 }

 
 deleteItem=(id)=>{
   //copy current list of items
   const list =[...this.state.list]

   //filter out the item being deleted
   const updateList= list.filter(item=>item.id!==id);
   
   //updateing the list after dleeteing the specific item
   this.setState({list:updateList})
 }

  render()
  {
    return (
      <div className=" bg-yellow tc pa3 dib  shadow-5">
        <h1 className="dark-green">{this.state.title}</h1>
        <SearchField value={this.state.newItem} updateInput={this.updateInput} addItem={this.addItem}/>
        <TodoList List={this.state.list} deleteItem={this.deleteItem}/>
      </div>
    );
  }
  
}

export default App;
