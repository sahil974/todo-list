import React from 'react'

const ToDoList = (props) => {


    return (
        <>
            <div className='todo_style'>
                <button
                    id='cross'
                    onClick={function () {
                        props.onSelect(props.id)
                    }}
                >x</button>
                <li>{props.text}</li>
            </div>
        </>
    )

}

export default ToDoList