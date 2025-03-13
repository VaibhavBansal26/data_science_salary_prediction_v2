import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { getPrediction } from '../api/api';
import NativeSelect from '@mui/material/NativeSelect';
import { jobTitleOptions } from './keys';
import { useWindowSize } from 'react-use';
import Confetti from "react-confetti";
// import { Link } from '@mui/material';
import {Link} from  'react-router-dom'


const Form = () => {
  const employeeResidenceOptions = ['ES', 'US', 'CA', 'DE', 'GB', 'NG', 'IN', 'HK', 'PT', 'NL', 'CH', 'CF', 'FR', 'AU', 'FI', 'UA', 'IE', 'IL', 'GH', 'AT', 'CO', 'SG', 'SE', 'SI', 'MX', 'UZ', 'BR', 'TH', 'HR', 'PL', 'KW', 'VN', 'CY', 'AR', 'AM', 'BA', 'KE', 'GR', 'MK', 'LV', 'RO', 'PK', 'IT', 'MA', 'LT', 'BE', 'AS', 'IR', 'HU', 'SK', 'CN', 'CZ', 'CR', 'TR', 'CL', 'PR', 'DK', 'BO', 'PH', 'DO', 'EG', 'ID', 'AE', 'MY', 'JP', 'EE', 'HN', 'TN', 'RU', 'DZ', 'IQ', 'BG', 'JE', 'RS', 'NZ', 'MD', 'LU', 'MT'];
  const experienceLevelOptions = ['Senior', 'Mid', 'Entry', 'Executive'];
  const remoteRatioOptions = [100, 50, 0];
  const companySizeOptions = ['L', 'S', 'M'];
  const experienceTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  const jobTitleAllOptions = [...jobTitleOptions]
  

    const [experience, setExperience] = useState("Senior");
    const [prediction ,setPrediction] = useState('')
    const [salary,setSalary] = useState(0)
    const [workYear,setWorkYear] = useState("2024")
    const [experienceType,setExperienceType] = useState("Full-time")
    const [employeeResidence,setEmployeeResidence] = useState("US")
    const [remoteRatio,setRemoteRatio] = useState(0)
    const [companyLocation,setCompanyLocation] = useState("US")
    const [companySize,setCompanySize] = useState("M")
    const [jobTitle,setJobTitle] = useState("ML Engineer")
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    

    const formatToDollars = (value) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    };

    const handlePredict = async() => {
        const response = await getPrediction({experience_level:experience,
          salary,work_year:workYear,employment_type:experienceType,
          employee_residence:employeeResidence,
          remote_ratio:remoteRatio,company_location:companyLocation,
          company_size:companySize,
          job_title:jobTitle
        })
        const tmp = formatToDollars(response.data.predicted_salary).toString()
        setPrediction(tmp)
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);

    }

    return (
      <>
      {showConfetti && <Confetti width={width} height={height} />}
      <div style={{display:'flex',flexDirection:'row',flex:1}}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap',margin:"auto 100px",flex:0.5}}>
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
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Experience Level
              </InputLabel>
              <NativeSelect
                value={experience}
                onChange={e => setExperience(e.target.value)}
                defaultValue={30}
              >
                <option value=""></option>
                  {experienceLevelOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Job Title
              </InputLabel>
              <NativeSelect
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
                defaultValue={30}
              >
                <option value=""></option>
                  {jobTitleAllOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Experience Type
              </InputLabel>
              <NativeSelect
                value={experienceType}
                onChange={e => setExperienceType(e.target.value)}
              >
                <option value=""></option>
                  {experienceTypeOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Employee Residence
              </InputLabel>
              <NativeSelect
                value={employeeResidence}
                onChange={e => setEmployeeResidence(e.target.value)}
              >
                <option value=""></option>
                  {employeeResidenceOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Remote Ratio
              </InputLabel>
              <NativeSelect
                value={remoteRatio}
                onChange={e => setRemoteRatio(e.target.value)}
              >
                <option value=""></option>
                  {remoteRatioOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Company Location
              </InputLabel>
              <NativeSelect
                value={companyLocation}
                onChange={e => setCompanyLocation(e.target.value)}
  
              >
                <option value=""></option>
                  {employeeResidenceOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Company Size
              </InputLabel>
              <NativeSelect
                value={companySize}
                onChange={e => setCompanySize(e.target.value)}
              >
                <option value=""></option>
                  {companySizeOptions.map((res) => (
                    <option key={res} value={res}>
                      {res}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
             <Button variant="outlined" onClick={handlePredict}>Predict</Button>
          </FormControl>
        </Box>
        <div style={{flex:0.3, minWidth:300}}>
          {prediction  ? 
          <>
          
          <h3>Salary Prediction: {prediction}</h3>

          </> : <div>
            <h3>Instructions</h3>
            <div style={{color:"red",padding:'5px'}}>Please click on this <Link style={{cursor:"pointer"}} to="https://3.90.178.242/predict">Backend Server</Link> link to grant access for API requests. This step is necessary due to the self-signed SSL certificate on the AWS EC2 domain. After granting access, you can fully enjoy the application.</div></div>}
        </div>
        </div>
      </>
       
      );
     
}

export default Form



