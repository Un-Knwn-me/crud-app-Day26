import React, { useState } from 'react';
import Base from '../Base/Base';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { profile } from '../Data/data';
import { useHistory } from 'react-router-dom';

const Profile = ({profileData, setProfileData}) => {
  
    // const [profileData, setProfileData] = useState(profile);
    const history = useHistory();

  return (
    <Base>
      <div className='profile'>
        {profileData.map((profileItem, id) => (
          <Card sx={{ display: 'flex' }} key={id}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {profileItem.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Gender: {profileItem.gender}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Age: {profileItem.age}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button onClick={()=>history.push(`/edit-profile/${id}`)}>Edit</Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image= {profileItem.img}
              alt="Live from space album cover"
            />
          </Card>
        ))}
      </div>
    </Base>
  );
};

export default Profile;
