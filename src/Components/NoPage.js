import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom';

const NoPage = () => {
  const history = useHistory()
  return (
    <Base
    title={"404 - Lost your way!"}
    description="Page not found"
    >
        <h4>Click here to redirect</h4>
        <Button variant='outlined' onClick={()=>history.push("/")}>
            Go to Home
        </Button>
    </Base>
  )
}

export default NoPage