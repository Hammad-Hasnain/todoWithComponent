import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ListItems = ({ listItems, editTodo, dltTodo }) => <ul style={{  padding: "10px" }}>
    {listItems.map((e, i) => <li key={i} style={{ display: 'flex', justifyContent: 'space-between',fontWeight:'bold',borderBottom:'1px solid black' }}> <span> {e}</span>
        <span>
            <button onClick={() => editTodo(e, i)}
                style={{ border: 'none', backgroundColor:'transparent',color:'green',cursor:'pointer' }}><EditIcon /></button>

            <button onClick={() => dltTodo(i)}
                style={{ border: 'none', backgroundColor:'transparent',color:'red',cursor:'pointer' }} ><DeleteIcon /></button> </span>
    </li>)}

</ul >



export default ListItems


