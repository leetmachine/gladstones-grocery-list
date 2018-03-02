import React from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import GroceryList from './GroceryList'

const MainContent = (props) =>
    <div class="main">
        <div className="left-box">
            <h2>Groceries:</h2>
            <label class="toggle">Show needed: <input type="checkbox" checked={props.isFiltered} onChange={props.filterGroceryItems}/></label>
            <h5>Got It!</h5>
        </div>
        <Counter listSize={props.listSize} neededSize={props.neededSize} setNeededSize={props.setNeededSize}/>
        <GroceryList items={props.items}
                     removeItemAt={props.removeItemAt}
                     changeItemGotIt={props.changeItemGotIt}
                     isFiltered={props.isFiltered}
                     listSize={props.listSize}
                     neededSize={props.neededSize}/>
    </div>

    MainContent.propTypes = {
        items: PropTypes.array.isRequired,
        removeItemAt: PropTypes.func.isRequired,
        changeItemGotIt: PropTypes.func.isRequired

    }

export default MainContent;