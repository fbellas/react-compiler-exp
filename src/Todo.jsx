import React from 'react';

const Todo = ({todo, onToggleCompleted}) => {

    console.log(`*** Todo: ${todo.text}`);
    
    return (
        <li className={todo.completed ? 'completed' : ''} 
            onClick={() => onToggleCompleted(todo.id)}>{todo.text}</li>
    );

}

export default React.memo(Todo);