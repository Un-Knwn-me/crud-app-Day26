import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import { useHistory, useParams } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const EditProfile = ({profileData, setProfileData}) => {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [idx, setIdx] = useState("")
    const [age, setAge] = useState("")
    const [img, setImg] = useState("")

    const [editId, setEditId] = useState("");
    const history = useHistory();
    const {id} = useParams();
    const profile = profileData[id];
    

  // Use effects

  useEffect(() => {
      setEditId(profile.id);
      setIdx(profile.id);
      setName(profile.name);
      setGender(profile.gender);
      setAge(profile.age);
      setImg(profile.img);
  }, [])

  // Update user
 
  const updateProfile = () => {
          const editUser = profileData.findIndex((profile) => profile.id === editId);
          
          // updating the user

          const updatedProfileObj = {
              id,
              name,
              gender,
              age,
              img
          }
          profileData[EditProfile] = updatedProfileObj;
          setProfileData([...profileData])

          setIdx("");
          setName("");
          setGender("");
          setAge("");
          setImg("");
          history.push("/profile")
      }

  return (
    <Base>
    <div> <h1>Edit Profile</h1> </div>

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
  <Button variant="contained" color="primary" onClick={updateProfile}>
  Update Profile
</Button>

</Box>
</div>
    </Base>
  )
}

export default EditProfile