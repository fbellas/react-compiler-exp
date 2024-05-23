import * as filterTypes from './filterTypes';

const Filter = ({filterType, onFilterClick}) => {

    console.log("*** Filter");
    
    return (

        <div>
            <button disabled={filterType === filterTypes.ALL} 
                onClick={() => onFilterClick(filterTypes.ALL)}>All</button>
            <button disabled={filterType === filterTypes.ACTIVE}
                onClick={() => onFilterClick(filterTypes.ACTIVE)}>Active</button>
            <button disabled={filterType === filterTypes.COMPLETED}
                onClick={() => onFilterClick(filterTypes.COMPLETED)}>Completed</button>
        </div>

    );

}

export default Filter;