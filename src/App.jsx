import React, { useState } from 'react'

import "./app.css";
import ToDoList from './ToDoList';

const App = () => {


    const [newItem, setNewItem] = useState('');

    const [items, setItems] = useState([]);

    function changeHandler(event) {
        const { name, value } = event.target;



        setNewItem(value);
    }


    function addItems() {
        setItems([...items, newItem]);
        setNewItem('');
    }


    const deleteItem = (id) => {
        console.log("deleted");
        setItems(function (oldItems) {
            return oldItems.filter(function (arEle, index) {
                return index !== id;
            })
        });
    }


    return (
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <input
                    type="text"
                    name="newItem"
                    value={newItem}
                    onChange={changeHandler}
                    placeholder='✍️Add an item' />
                <button onClick={addItems}>+</button>


                <ol>
                    {items.map(function (ele, index) {
                        return <ToDoList
                            text={ele}
                            key={index}
                            id={index}
                            onSelect={deleteItem}
                        />
                    })}
                </ol>
            </div>

        </div>
    )
}

export default App