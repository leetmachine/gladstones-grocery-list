import React from 'react';

const Counter = props => 

<table class="counter">
    <tbody>
        <tr>
            <td>Total:</td>
            <td>{props.listSize}</td>
        </tr>
        <tr>
            <td>Remaining:</td>
            <td onChange={props.setNeededSize}>{props.neededSize}</td>
        </tr>
    </tbody>
</table>

export default Counter;