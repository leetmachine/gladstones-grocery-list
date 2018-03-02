import React, { Component } from 'react';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import './App.css';

class App extends Component {

  state = {
    items: [ {id: 1, name: 'Milk', gotIt: true}, {id: 2, name: 'Eggs', gotIt: false}  ],
    pendingItem: '',
    isFiltered: false,
  }

  //used in GroceryInput form input
  pendingItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  }

  //used in GroceryInput form
  newItemSubmitHandler = e => {
    document.getElementById('mainForm').reset()

    e.preventDefault();
    this.setState({
      items: [
        { id: Date.now(), name: this.state.pendingItem},
        ...this.state.items
      ],
      pendingItem: ""
    });
  }

  //used by GroceryItem li button
  removeItemAt = id => {
    this.setState({
      items: this.state.items.filter(item => id !== item.id)
    });
  }

  changeItemGotIt = id => {
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id){
          return {
            ...item,
            gotIt: !item['gotIt']
          }
        }
        return item;
      }),
    });
  }

  filterGroceryItems = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  getListSize = () => {
    return this.state.items.length;
  }

  getNeededSize = () => {
    return this.state.items.filter(item => !item.gotIt).length;
  }



  render() {
    const listSize = this.getListSize()
    const neededSize = this.getNeededSize()

    return (
      <div className="App">
        <Header newItemSubmitHandler={this.newItemSubmitHandler}
                pendingItem={this.pendingItem}
                pendingItemInput={this.pendingItemInput}/>

        <MainContent items={this.state.items}
                     listSize={listSize}
                     neededSize={neededSize}
                     setNeededSize={this.setNeededSize}
                     removeItemAt={this.removeItemAt}
                     changeItemGotIt={this.changeItemGotIt}
                     filterGroceryItems={this.filterGroceryItems}
                     isFiltered={this.state.isFiltered}/>
      </div>
    );
  }
}

export default App;
