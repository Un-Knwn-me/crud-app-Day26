import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { Box, Button, TextField } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { data } from '../Data/data'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const EditUser = ({userData, setUserData}) => {

      // Setting state
      // const [userData, setUserData] = useState(data)
      const [name, setName] = useState("")
      const [gender, setGender] = useState("")
      const [idx, setIdx] = useState("")
      const [age, setAge] = useState("")
      const [img, setImg] = useState("")

      const [editId, setEditId] = useState("");
      const history = useHistory();
      const {id} = useParams();
      const users = userData[id];
      

    // Use effects

    useEffect(() => {
        setEditId(users.id);
        setIdx(users.id);
        setName(users.name);
        setGender(users.gender);
        setAge(users.age);
        setImg(users.img);
    }, [])

    // Update user
    // find & select users

    const selectEditUser = (idx) => {
        setEditId(idx);
        const selectUser = userData.find((user) => user.id === idx);

        setIdx(selectUser.id);
        setName(selectUser.name);
        setGender(selectUser.gender);
        setAge(selectUser.age);
        setImg(selectUser.img);
    }


    const updateUser = () => {
            const editUser = userData.findIndex((user) => user.id === editId);
            
            // updating the user

            const updatedUserObj = {
                id,
                name,
                gender,
                age,
                img
            }
            userData[editUser] = updatedUserObj;
            setUserData([...userData])

            setIdx("");
            setName("");
            setGender("");
            setAge("");
            setImg("");
            history.push("/user")
        }

    // selectEditUser(user.id)

  return (
    <Base>
    <div> <h1>Edit User</h1> </div>

<div className='input-section'>

<Box sx={{ '& > :not(style)': { m: 1 } }}>

<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
    <TextField id="name" label="Id" variant="standard" onChange={(e)=>setIdx(e.target.value)} value={idx} />
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
  <Button variant="contained" color="primary" onClick={updateUser}>
  Edit User
</Button>

</Box>
</div>
    </Base>
  )
}

export default EditUser