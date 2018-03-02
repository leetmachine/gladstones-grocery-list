import React from 'react'
import PropTypes from 'prop-types'

const GroceryItem = props => {

    return (
        <li>
            <input type="checkbox" checked={props.item.gotIt} onChange={props.checkGotItBox}/> 
            <span>{props.item.name}</span>
            <button class="remove" onClick={props.removeItemOnClick}>remove</button>
        </li>
    )

}

GroceryItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeItemOnClick: PropTypes.func.isRequired
}

export default GroceryItem