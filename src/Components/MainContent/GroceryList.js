import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GroceryItem from './GroceryItem'

class GroceryList extends Component {
    constructor(props){
        super(props);
        this.state = {
            neededSize: props.neededSize,
            listSize: props.listSize
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.neededSize !== this.state.neededSize || nextProps.listSize !== this.state.listSize){
            this.setState({
                neededSize: nextProps.neededSize,
                listSize: nextProps.listSize
            });
        }
    }

    render(){
        if(this.state.neededSize === 0 && this.props.isFiltered){
            return (
                <div className="done-shopping">
                    <h2>Done Shopping!</h2>
                </div> 
            )
        } else if(this.state.listSize === 0){
            return (
                <div className="done-shopping">
                    <h2>Add some items!</h2>
                </div> 
            )
        }
        else {
            return (
                <ul>
                    {this.props.items
                    .filter(item => !this.props.isFiltered || !item.gotIt)
                    .map(item => 
                        <GroceryItem key={item.id}
                                    item={item}
                                    removeItemOnClick={() => this.props.removeItemAt(item.id)} 
                                    checkGotItBox={() => this.props.changeItemGotIt(item.id)} />
                    )}              
                </ul>
            )
        }
    }
}

    

    GroceryList.propTypes = {
        items: PropTypes.array.isRequired,
        removeItemAt: PropTypes.func.isRequired
    }

export default GroceryList;