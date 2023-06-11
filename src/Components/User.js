import React, { useState } from 'react'
import Base from '../Base/Base';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { data } from '../Data/data.js';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';

const User = ({userData, setUserData}) => {

    // Setting state
    // const [userData, setUserData] = useState(data);
    const history = useHistory();
   
    // Delete a user

    const deleteUser = (userId) => {
        const selectUser = userData.filter((user) => user.id !== userId);
        setUserData(selectUser);
    }

  return (
    <Base>
    <div className='card-container'>
    {userData.map((user,id)=>(
    <Card sx={{ maxWidth: 345 }} key={user.id} className='card'>
      <CardMedia
        component="img"
        alt="User-Profile"
        height="140"
        image= {user.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {user.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {user.age}
        </Typography>
      </CardContent>
      <CardActions >
      <Button variant="contained" style={{margin: '0 auto', display: "flex"}} endIcon={<EditIcon />} onClick={()=>history.push(`/edit-user/${id}`)}>
        Edit
      </Button>
      <Button variant="outlined" style={{margin: '0 auto', display: "flex"}} color='error' startIcon={<DeleteIcon />} onClick={()=>deleteUser(user.id)}>
        Delete
      </Button>
      </CardActions>
    </Card>
    ))}
    </div>
    </Base>
  )
}

export default User;