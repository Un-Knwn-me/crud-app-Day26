import React, { useState } from 'react'
import Base from '../Base/Base'
import { Box, Button, TextField, Typography } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { data } from '../Data/data'
import { useHistory } from 'react-router-dom';

const CreateUser = ({userData, setUserData}) => {

    // Setting state
    // const [userData, setUserData] = useState(data)
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [id, setId] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")
    const history = useHistory();

     // add new user

     const addUser = () =>{
        const newUser = {
            id,
            name,
            gender,
            age,
            img
        }

        let x = [...userData, newUser]
        console.log(x);

        setUserData(x)
        setName("");
        setGender("");
        setAge("");
        setImg("");
        setId("");
        console.log(userData)
        history.push('/user');
    } 

  return (
    <Base>
   <div> <h1>Add New User</h1> </div>

<div className='input-section'>

<Box sx={{ '& > :not(style)': { m: 1 } }}>

<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="name" label="Id" variant="standard" onChange={(e)=>setId(e.target.value)} value={id} />
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="name" label="Name" variant="standard" onChange={(e)=>setName(e.target.value)} value={name} />
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="img" label="Profile picture" variant="standard" onChange={(e)=>setImg(e.target.value)} value={img} />
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="gender" label="Gender" variant="standard" onChange={(e)=>setGender(e.target.value)} value={gender} />
  </Box>
  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="age" label="Age" variant="standard" onChange={(e)=>setAge(e.target.value)} value={age} />
  </Box>
  <Button variant="contained" color="success" onClick={addUser}>
        Add User
  </Button> 
</Box>
</div>
    </Base>
    
  )
}

export default CreateUser