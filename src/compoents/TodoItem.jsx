import React from 'react';


const TodoItem =(props) => {

    console.log(props);
     return(
        <div>
            <p>{props.name}</p>
        </div>
     )
}

export default TodoItem;