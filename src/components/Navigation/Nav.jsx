import React from 'react'
import { FaMoon,RiMenu3Line,MdOutlineWbSunny } from '../../icons'

function Nav({isDark,toggleDarkMode,toggleDrawer}) {
    return (
        <div className='flex items-center justify-between'>
            <img 
                src={isDark ? './logo_2.png':'./logo_blue.png'}
                className='h-10'
                alt='logo'
            />

            <button 
                className='text-2xl text-gray dark:text-gray hover:bg-fadeGray hover:dark:bg-fadeBlue p-2 rounded-md'
                onClick={toggleDarkMode}
            >
                {
                    isDark ?
                    (<MdOutlineWbSunny/>):(<FaMoon/>)
                }
            </button>

            <button 
                onClick={toggleDrawer} 
                className='text-2xl text-gray dark:text-gray hover:bg-fadeGray hover:dark:bg-fadeBlue p-2 rounded-md'
            >
                <RiMenu3Line/>
            </button>
        </div>
    )
}

export default Nav