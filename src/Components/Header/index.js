import React from 'react';
import PropTypes from 'prop-types';

import GroceryInput from './GroceryInput';

const Header = (props) => 
    <header>
        <h1>GLADSTONE'S</h1>
        <h2>Grocery List</h2>
        <GroceryInput newItemSubmitHandler={props.newItemSubmitHandler}
                      pendingItem={props.pendingItem}
                      pendingItemInput={props.pendingItemInput}/>
    </header>

    Header.propTypes = {
        newItemSubmitHandler: PropTypes.func.isRequired,
        pendingItem: PropTypes.string.isRequired,
        pendingItemInput: PropTypes.func.isRequired
    }

export default Header;