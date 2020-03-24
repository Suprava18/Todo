import React from 'react';
import './TodoList.css';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/free-solid-svg-icons";
const TodoList=({List,deleteItem})=>{
   return(
            <div>
                <ul>
                    {List.map(item=>
                        {
                            return(
                            <li className="shadow-5" key={item.id}>{item.value}
                            <button
                            onClick={()=>deleteItem(item.id)}>
                                      <i className="material-icons"> X </i></button></li>
                            )
                        })}
                </ul>
            </div>
        )
    
}
export default TodoList;