import React, { useEffect ,useState} from 'react';
import './App.css'
import { TextField, Stack, Button, Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function App() {
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [mobile,setMobile] = useState("");
  const [email,setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender,setGender] = useState("");
  const [course,setCourse] = useState("");
  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleAddress = (e) =>{
    setAddress(e.target.value)
  }
  const handleMobile = (e) =>{
    setMobile(e.target.value)
  }
  const handleEmail = (e) =>{
   setEmail(e.target.value)
  }
  
  const handleGender = (e) =>{
    setGender(e.target.value)
  }
  const handleDateChange = (date) =>{
    setSelectedDate(date);
  }
  const handleCourse = (e) =>{
    console.log(e.target.value)
  }
  const handleReset = () =>{
    setName("")
    setAddress("")
    setMobile("")
    setEmail("")
    setSelectedDate(null)
    setGender("")
    setCourse("")

  }



  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='main-container d-flex align-items-center justify-content-center bg-dark'>
      <div className='form-container border rounded bg-white' style={{ height: '600px' }}>
        <h3 className='heading'>STUDENT REGISTERATION FORM</h3>
        <hr />
        <form>
          <div className="content-container row">
            <div className="firstcol col-6 col-md-12" style={{ width: '330px' }}>
              <div className='mt-2'>
                <TextField id="outlined-basic" value={name} onChange={handleName} label="Full Name" className='w-100' variant="outlined" />
              </div>
              <div className='mt-5'>
                <TextField id="outlined-basic" value={address} onChange={handleAddress} label="Address" className='w-100' variant="outlined" />
              </div>
              <div className='mt-5'>
                <TextField id="outlined-basic" value={mobile} onChange={handleMobile} label="Mobile" className='w-100' variant="outlined" />
              </div>
              <div className='mt-5'>
                <TextField id="outlined-basic" value={email} label="Email" onChange={handleEmail} className='w-100' variant="outlined" />
              </div>
            </div>
            <div className="secondcol col-6 col-md-12" style={{ width: '330px' }}>
              <div >
                <p className='fw-bolder'>Date of Birth</p>
                <LocalizationProvider dateAdapter={AdapterDayjs} className='mt-0'>
                <DatePicker
                  className=" w-100"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(props) => <input {...props} readOnly />}
                />
                </LocalizationProvider>
              </div>
              <div className='mt-3'>
                <FormControl>
                  <FormLabel className='fw-bolder' id='gender-label'>
                    Gender
                  </FormLabel>
                  <RadioGroup onChange={handleGender} value={gender} row name='gender' aria-labelledby='gender-label'>
                    <FormControlLabel control={<Radio />} label="male" value="male" />
                    <FormControlLabel control={<Radio />} label="female" value="female" />
                    <FormControlLabel control={<Radio />} label="other" value="other" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='mt-2'>
                <TextField label="Courses" value={course} onChange={handleCourse} select className='w-100'>
                  <MenuItem value="bio">Biology</MenuItem>
                  <MenuItem value="cs">Computer science</MenuItem>
                  <MenuItem value="his">History</MenuItem>
                </TextField>
              </div>
              <Stack spacing={2} className='mt-2'>
                <Button type='submit' style={{ width: '100%', height: '50px' }} className='btn btn-primary mt-2' variant="contained">Submit</Button>
                <Button style={{ width: '100%', height: '50px' }} variant="outlined" onClick={handleReset}>Reset</Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App