import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory()
  return (
    <Base
    title={"Welcome to CRUD app"}
    description={"Please click the below button to see user details..."}
    >
        <Button variant="outlined" color='primary' onClick={()=>history.push("/user")}>
            View User
        </Button>

    </Base>
  )
}

export default Dashboard