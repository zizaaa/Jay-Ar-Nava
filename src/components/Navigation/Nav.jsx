import React from 'react'
import { FaMoon,RiMenu3Line,MdOutlineWbSunny } from '../../icons'

function Nav({isDark,toggleDarkMode,toggleDrawer}) {
  return (
    <div className='flex items-center justify-between'>
        <img 
            src='./logo_2.png' 
            className='h-10'
            alt='logo'
        />

        <button 
            className='text-2xl text-darkGray dark:text-lighterGray hover:bg-semiGray hover:dark:bg-darkerGray p-2 rounded-md'
            onClick={toggleDarkMode}
        >
            {
                isDark ?
                (<MdOutlineWbSunny/>):(<FaMoon/>)
            }
        </button>

        <button 
            onClick={toggleDrawer} 
            className='text-2xl text-darkGray dark:text-lighterGray hover:bg-semiGray hover:dark:bg-darkerGray p-2 rounded-md'
        >
            <RiMenu3Line/>
        </button>
    </div>
  )
}

export default Nav