import Todo from './Todo';

const Todos = ({todos, onToggleCompleted}) => {

    console.log("*** Todos");
    
    return (
        <ul>
            {todos.map(todo => 
                <Todo key={todo.id} todo={todo}
                    onToggleCompleted={onToggleCompleted}/>)
            }
        </ul>
    );

}

export default Todos;
