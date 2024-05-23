import {useState} from 'react';

import AddTodo from './AddTodo';
import Todos from './Todos';
import Filter from './Filter';
import * as filterTypes from './filterTypes';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [filterType, setFilterType] = useState(filterTypes.ALL);

    const todo = text => {
        return {id: new Date().getTime(), text, completed: false}
    };

    const visibleTodos = () => {
        
        switch(filterType) {
            case filterTypes.ALL:
                return todos;
            case filterTypes.ACTIVE:
                return todos.filter(todo => !todo.completed);
            case filterTypes.COMPLETED:
                return todos.filter(todo => todo.completed);
            default:
                throw new Error(`Unknown filter type ${filterType}`);
        }

    }

    const handleAddTodo = text  => setTodos(todos => [todo(text), ...todos]);

    const handleToggleCompleted = id => 
        setTodos(todos => todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} :
                todo;
        }));

    const handleFilterClick = filterType => setFilterType(filterType);

    console.log("*** App");

    return (
        <div>
            <AddTodo onAddTodo={handleAddTodo}/>
            <Todos todos={visibleTodos()} 
                onToggleCompleted={handleToggleCompleted}/>
            <Filter filterType={filterType} onFilterClick={handleFilterClick}/>
        </div>
    );

}

export default App;
