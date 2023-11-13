
import { Stack, Box, Grid } from '@mui/material'
import Input from './component/input/Input'
import AddTodo from './component/todoBtn/AddTodo'
import DeleteAllTodo from './component/todoBtn/DeleteAllTodo'
import ListItems from './component/listItems/ListItems'
import { useState } from 'react'

const App = () => {

  const [inpValue, setInpValue] = useState("")
  const [todoData, setTodoData] = useState([])

  const settingTodoData = (event) => {
    setInpValue(event.target.value)

  }

  const addTodo = () => {
    // if inpValue exist then todoData will be updated
    inpValue && setTodoData(prev => [...prev, inpValue])
  }

  const editTodo = (element, index) => {
    const newTodo = prompt("Enter your new todo");
    // '' & null are false value that's why if will not execute
    if (newTodo) {
      const editedTodo = todoData.map((e, i) => (index === i) ? todoData[index] = newTodo : todoData[i])
      setTodoData(editedTodo)
    }
    else {
      alert("No todo entered")
    }
  }

  const dltTodo = (index) => {
    const deletedTodo = todoData.filter((e, i) => index != i)
    setTodoData(deletedTodo)
  }

  const dltAllTodo = () => {
    setTodoData([])
  }






  return (
    <Grid container sx={{marginTop:'20px'}}>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ p: 1, boxShadow:'0 0 8px orange', border: '2px solid darkorange',borderRadius:'7px',margin:'auto' }}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Input settingTodoData={settingTodoData} />
          <Box textAlign={'center'}>
            <AddTodo addTodo={addTodo} />
            <DeleteAllTodo dltAllTodo={dltAllTodo} />
          </Box>
        </Stack>
        <Stack>
          <Box>
            <ListItems listItems={todoData} editTodo={editTodo} dltTodo={dltTodo}  />
          </Box>
        </Stack>

      </Grid>
    </Grid>


    // <Stack>
    //   <Stack direction={'row'} border={'2px solid red'}>
    //     <Box>
    //       <Input settingTodoData={settingTodoData} />
    //     </Box>
    //     <Box>
    //       <AddTodo addTodo={addTodo} />
    //       <DeleteAllTodo dltAllTodo={dltAllTodo} />
    //     </Box>
    //   </Stack>
    //   <Box>
    //     <ListItems listItems={todoData} editTodo={editTodo} dltTodo={dltTodo} />
    //   </Box>

    // </Stack>
  )
}

export default App







