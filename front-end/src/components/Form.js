import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { getPrediction } from '../api/api';


const Form = () => {
    const [experience, setExperience] = useState("");
    const [prediction ,setPrediction] = useState(0)
    const [salary,setSalary] = useState(0)
    const [workYear,setWorkYear] = useState("")
    const [experienceType,setExperienceType] = useState("")
    const [employeeResidence,setEmployeeResidence] = useState("")
    const [remoteRatio,setRemoteRatio] = useState(0)
    const [companyLocation,setCompanyLocation] = useState("")
    const [companySize,setCompanySize] = useState("")
    const [jobTitle,setJobTitle] = useState("")


    const handlePredict = async() => {
        const response = await getPrediction({experience_level:experience,
          salary,work_year:workYear,employment_type:experienceType,
          employee_residence:employeeResidence,
          remote_ratio:remoteRatio,company_location:companyLocation,
          company_size:companySize,
          job_title:jobTitle
        })
        setPrediction(response.data.predicted_salary)
    }

    return (
        <>
        <h3>Salary Prediction</h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap',margin:"auto 300px",}}>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Work Year</InputLabel>
              <Input
                onChange={e => setWorkYear(e.target.value)}
                value={workYear}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Salary</InputLabel>
              <Input
                onChange={e => setSalary(e.target.value)}
                value={salary}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Experience Level</InputLabel>
              <Input
                value={experience}
                placeholder='Years of Experience'
                onChange={e => setExperience(e.target.value)}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Job Title</InputLabel>
              <Input
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Experience Type</InputLabel>
              <Input
                onChange={e => setExperienceType(e.target.value)}
                value={experienceType}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Employee Residence</InputLabel>
              <Input
                onChange={e => setEmployeeResidence(e.target.value)}
                value={employeeResidence}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Remote Ratio</InputLabel>
              <Input
                onChange={e => setRemoteRatio(e.target.value)}
                value={remoteRatio}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Company Location</InputLabel>
              <Input
                onChange={e => setCompanyLocation(e.target.value)}
                value={companyLocation}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Company Size</InputLabel>
              <Input
                onChange={e => setCompanySize(e.target.value)}
                value={companySize}
                id="standard-adornment-amount"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
             <Button variant="outlined" onClick={handlePredict}>Predict</Button>
             <h3>{prediction}</h3>
            </FormControl>
        </Box>
        </>
      );
     
}

export default Form



