import React from 'react'

const AddTodo = ({ addTodo }) => <button className='todo-btns' onClick={addTodo} style={{ border: 'none', padding: '4px 8px', backgroundColor: 'darkorange', borderRadius: '5px', cursor: 'pointer' }} > Add Todo</ button >


export default AddTodo