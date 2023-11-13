import React from 'react'

const DeleteAllTodo = ({ dltAllTodo }) => <button className='todo-btns' onClick={dltAllTodo}
    style={{
        border: 'none', padding: '4px 8px', backgroundColor: 'red', borderRadius: '5px', cursor: 'pointer'
    }} >
    Delete All</button>


export default DeleteAllTodo