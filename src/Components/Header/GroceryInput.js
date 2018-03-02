import React from 'react'
import PropTypes from 'prop-types'

const GroceryInputForm = props =>
    <form id="mainForm" onSubmit={props.newItemSubmitHandler}>
        <input type="text" placeholder="Add a Grocery Item" value={props.pendingItem} onChange={props.pendingItemInput}/>
        <button type="submit" value="submit">Submit</button>
    </form>

    GroceryInputForm.propTypes = {
        newItemSubmitHandler: PropTypes.func.isRequired,
        pendingItem: PropTypes.string.isRequired,
        pendingItemInput: PropTypes.func.isRequired
    }

export default GroceryInputForm;