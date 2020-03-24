import React from 'react';
import './Serchfield.css';
const SearchField =({value,updateInput,addItem})=>{

    return(
        <div className="addfield">
            <input 
            className="pa2 tc"
            type="text" 
            value={value}
            placeholder="Add list..."
            onChange={e=>{updateInput("newItem",e.target.value)}}/>

            <button className="ml3 pa2"
            onClick={addItem} disabled={!value.length} >Add</button>
        </div>
    )
}
export default SearchField;