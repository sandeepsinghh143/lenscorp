import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeIcons = ({theme,handleThemeChange}) => {
  return (
    <div onClick={handleThemeChange} className='cursor-pointer'>
        {theme==="dark"?<LightModeIcon className='text-[#dddd07]' fontSize='large'/>:<DarkModeIcon fontSize='large'/>}
    </div>
  )
}

export default ThemeIcons