import { TextField, Grid, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../Auth/Action'

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userData = {
   
      email: data.get("email"),
      password: data.get("password")
    }
    console.log("userData", userData)
    dispatch(login(userData))
    console.log("userData"+ userData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>



          <Grid item xs={12} >
            <TextField required
              id="email" name="email" label="email" fullWidth autoComplete='email'></TextField>
          </Grid>
          <Grid item xs={12} >
            <TextField required
              id="password" name="password" label="password" fullWidth autoComplete='password'></TextField>
          </Grid>
          <Grid item xs={12} >
            <Button className='bg-[#9155FD]  w-full' type='submit' variant='contained' size="large" sx={{ padding: "0.8rem 0 ", bgcolor: "#9155FD" }}>Login</Button>
          </Grid>
        </Grid>
        <div className='flex justify-center flex-col items-center'>
          <div className='py-3 flex items-center'>
            <p>if you have already account?</p>
            <Button onClick={() => navigate("/register")} className='ml-5 ' size="small">Register</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm