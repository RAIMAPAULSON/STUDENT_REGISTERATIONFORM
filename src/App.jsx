import React, { useEffect, useState } from 'react';
import './App.css'
import SchoolLogo from '../src/assets/schoollogo.png'
import { TextField, Stack, Button, Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, MenuItem, Select, InputLabel, Modal, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function App() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [formData, setFormData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const [isfullNameInvalid, setIsFullNameInvalid] = useState(false);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);
  const [isMobileInvalid, setIsMobileInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleInputValidationName = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[A-Za-z\s.]*$/)) {
      if (name == "fullName") {
        setFullName(value);
        setIsFullNameInvalid(false);
      }
    }
    else {
      if (name == "fullName") {
        setFullName(value);
        setIsFullNameInvalid(true);
      }
    }
  }
  const handleInputValidationAddress = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[A-Za-z\d\s,()]*$/)) {
      if (name == "address") {
        setAddress(value);
        setIsAddressInvalid(false);
      }
    } else {
      if (name == "address") {
        setAddress(value);
        setIsAddressInvalid(true);
      }
    }
  }
  const handleInputValidationMobile = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^\d{10,}$/)) {
      if (name == "mobile") {
        setMobile(value);
        setIsMobileInvalid(false);
      }
    } else {
      if (name == "mobile") {
        setMobile(value);
        setIsMobileInvalid(true);
      }
    }
  }
  const handleInputValidationEmail = (tag) => {
    const { name, value } = tag;
    if (!!value.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)) {
      if (name == "email") {
        setEmail(value);
        setIsEmailInvalid(false);
      }
    } else {
      if (name == "email") {
        setEmail(value);
        setIsEmailInvalid(true);
      }
    }
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
  const handleCourse = (e) => {
    setCourse(e.target.value)
  }
  const handleReset = () => {
    setFullName("")
    setAddress("")
    setMobile("")
    setEmail("")
    setSelectedDate(null)
    setGender("")
    setCourse("")

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !address || !mobile || !email || !selectedDate || !gender || !course) {
      alert("please fill the form completely");
      setModalOpen(false);

    }
    const formDataObject = {
      name: fullName,
      address: address,
      mobile: mobile,
      email: email,
      selectedDate: selectedDate.format("DD-MM-YYYY"),
      gender: gender,
      course: course,
    };
    setFormData(formDataObject);
    setModalOpen(true);
    console.log(formData);
  }
  const handleEdit = (e) => {
    setModalOpen(false);
  }
  const handleUpdate = (e) => {
    alert("Your Registeration is successfully completed!!!! ")
    setModalOpen(false);
    setFullName("")
    setAddress("")
    setMobile("")
    setEmail("")
    setSelectedDate(null)
    setGender("")
    setCourse("")

  }


  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='main-container d-flex align-items-center justify-content-center'>
      <div className='form-container border rounded' style={{ height: '620px' }}>
        <div className='d-flex justify-content-between'>
          <div>
            <img src={SchoolLogo} height={'60px'} alt="" className='mb-2' />
            <span className='fw-bolder logo-text'>VIDYABHAVAN</span>
          </div>
        </div>
        <h3 className='heading'>STUDENT REGISTERATION FORM</h3>
        <hr />
        <form>
          <div className="content-container row">
            <div className="firstcol col-6 col-md-12" style={{ width: '330px' }}>
              <div className='mt-2'>
                <TextField id="outlined-basic" name="fullName" value={fullName} onChange={(e) => handleInputValidationName(e.target)} label="Full Name" className='w-100' variant="outlined" />
              </div>
              {isfullNameInvalid && (
                <div className='text-danger fw-bolder mt-1'>Invalid name</div>
              )}
              <div className='mt-5'>
                <TextField id="outlined-basic" name="address" value={address} onChange={(e) => handleInputValidationAddress(e.target)} label="Address" className='w-100' variant="outlined" />
              </div>
              {isAddressInvalid && (
                <div className='text-danger fw-bolder '>Please enter a valid address</div>
              )}
              <div className='mt-5'>
                <TextField id="outlined-basic" name="mobile" value={mobile} onChange={(e) => handleInputValidationMobile(e.target)} label="Mobile" className='w-100' variant="outlined" />
              </div>
              {isMobileInvalid &&
                (<div className='text-danger fw-bolder '>Invalid phone number</div>)
              }
              <div className='mt-5'>
                <TextField id="outlined-basic" name="email" value={email} label="Email" onChange={(e) => handleInputValidationEmail(e.target)} className='w-100' variant="outlined" />
              </div>
              {isEmailInvalid &&
                (
                  <div className='text-danger fw-bolder'>Please enter a valid email address</div>
                )
              }
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                  <Select
                    id="demo-simple-select"
                    value={course}
                    label="Course"
                    onChange={handleCourse}
                  >
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Computer Science">Computer science</MenuItem>
                    <MenuItem value="Commerce">Commerce</MenuItem>
                    <MenuItem value="Commerce">Humanities</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Stack spacing={2} className='mt-2'>
                <Button disabled={isfullNameInvalid || isAddressInvalid || isMobileInvalid || isEmailInvalid}
                  type='submit' style={{ width: '100%', height: '50px' }} onClick={handleSubmit} className='btn btn-primary mt-2' variant="contained">Submit</Button>
                <Button style={{ width: '100%', height: '50px' }} variant="outlined" onClick={handleReset}>Reset</Button>
              </Stack>
            </div>
          </div>
        </form>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} >
          <Box className="text-justify border rounded modalbox"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
            }}
          >
            <Typography variant="h5" className='fw-bolder text-primary text-center' gutterBottom>
              SUBMIT APPLICATION
              <hr />
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Name:</span> {formData.name}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Address:</span> {formData.address}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Mobile:</span> {formData.mobile}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Email:</span> {formData.email}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Date of Birth:</span> {formData.selectedDate}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'>Gender:</span> {formData.gender}
            </Typography>
            <Typography variant="body1" gutterBottom className='fs-5 p-1'>
              <span className='fw-bolder'> Course:</span> {formData.course}
            </Typography>
            <Stack direction="cols" spacing={5} className='mt-4 modalbuttons'>
              <Button
                style={{ width: '30%', height: '30px' }} onClick={handleEdit} className='btn btn-primary me-2 edit'
                variant="contained">Edit</Button>
              <Button style={{ width: '30%', height: '30px' }} variant="outlined" onClick={handleUpdate} className='btn bg-success text-white'>Confirm</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default App