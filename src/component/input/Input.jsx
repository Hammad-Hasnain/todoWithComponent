import React from 'react'
import { useState } from 'react'

const Input = ({ settingTodoData }) => {
    const [inpValue, setInpValue] = useState("")

    return <input className='inp' type="text" placeholder="Enter todo"
        onChange={settingTodoData}
        style={{ width: '100%', border: 'none', borderBottom: '1px solid darkorange', outline: 'none' }} />
}

export default Input