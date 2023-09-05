import React from 'react';
import Logo from '../assets/images/senseLogo.png';
import { InstagramOutlined , TwitterOutlined  } from '@ant-design/icons'
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
const Footer = () => {
  return (
    <div className='bg-[#1E1E1E] h-[266px] w-full flex  justify-center px-10 max-lg:justify-normal max-lg:gap-x-2 max-lg:px-2 items-center'>
      <div className='w-1/5'>
        <div className='grid justify-center gap-y-5 items-center'>
          <img src={Logo} alt='...' />
          <h1 className='text-white text-xl font-poppins max-lg:text-xs'> 777 Sense Labs © 2022</h1>
          <div>
          <h1 className='text-slate-500 text-left text-xl font-poppins  max-lg:text-xs'>Ste 1200,</h1>
          <h1  className='text-slate-500 text-left text-xl font-poppins  max-lg:text-xs' >1309 Coffeen Avenue</h1>
          <h1  className='text-slate-500 text-left text-xl font-poppins  max-lg:text-xs'>Sheridan, US, 82801</h1>
          </div>
         
        </div>
      </div>
      <div className='w-1/5' >
        <div className='grid gap-y-5'>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Contact Us</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>FAQ</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Privacy Policy</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Terms of User</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins max-lg:text-xs'>Cookie Policy</h1>
        </div>
      </div>
      <div className='w-1/5' >
      <div className='grid gap-y-5'>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Home</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Feed</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Foundation</h1>
        <h1  className='text-slate-500 text-left text-base font-poppins  max-lg:text-xs'>Analytics</h1>
      
        </div>
      </div>
      <div className='w-1/5' >
      <div className='grid gap-y-5'>
        <div className='flex gap-x-2'>
        <h1 className='text-white text-xl'> <InstagramOutlined/></h1>
        <h1  className='text-slate-500 text-left text-base font-poppins mt-1  max-lg:text-xs'>Instagram</h1>
        </div>
        <div className='flex gap-x-2'>
        <h1 className='text-white text-xl'> <TwitterOutlined/></h1>
        <h1  className='text-slate-500 text-left text-base font-poppins mt-1  max-lg:text-xs'>Instagram</h1>
        </div>
        <div className='flex gap-x-2'>
        <h1 className='text-white text-xl'> <InstagramOutlined/></h1>
        <h1  className='text-slate-500 text-left text-base font-poppins mt-1  max-lg:text-xs'>Discord</h1>
        </div>
        <div className='flex gap-x-2'>
        <h1 className='text-white text-xl'> <InstagramOutlined/></h1>
        <h1  className='text-slate-500 text-left text-base font-poppins mt-1  max-lg:text-xs'>Medium</h1>
        </div>
        </div>
      </div>
      <div className='w-1/5 max-lg:hidden' >
      <TextField
      sx={{
        '& .MuiInputLabel-root, & .MuiInputBase-input': {
          color: 'white !important', 
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white !important', 
        },
      }}
      id="outlined-basic"
      label="Newsletter" 
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button sx={{backgroundColor:"#A27DF9" , width:"120px"}} variant="contained">
              Subscribe
            </Button>
          </InputAdornment>
        ),
      }}
    />
      </div>
    </div>
  );
}

export default Footer;
