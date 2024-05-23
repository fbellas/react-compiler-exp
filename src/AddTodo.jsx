import {useState} from 'react';

const AddTodo = ({onAddTodo}) => {

    console.log("*** AddTodo");

    const [text, setText] = useState('');

    return (

        <form onSubmit={(e) => {
                e.preventDefault();
                if (!text.trim()) {
                    return;
                }
                onAddTodo(text.trim());
                setText('');
            }}>

            <input type="text" value={text} onChange={e =>setText(e.target.value)}/>
            <button type="submit">Add</button>

        </form>

    );

}

export default AddTodo;