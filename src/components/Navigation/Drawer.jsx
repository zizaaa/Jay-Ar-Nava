import { useState } from 'react';

import {
    PiBracketsCurlyBold,
    MdCardTravel,
    FaHammer,
    GiGraduateCap,
    LiaMedalSolid,
    RxCross2,
    HiOutlineIdentification
} from '../../icons';

function Drawer({ isShowDrawer, toggleDrawer }) {
    const [hoveredIcon, setHoveredIcon] = useState(<HiOutlineIdentification />);

    const handleClick = (path) => {
        toggleDrawer();
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    };
    
    // Function to handle hover over list items
    const handleHover = (icon) => {
        setHoveredIcon(icon);
    };

    // Reset hovered icon when mouse leaves list item
    const handleLeave = () => {
        setHoveredIcon(<HiOutlineIdentification />);
    };

    return (
        <div
            className={`${isShowDrawer ? 'translate-y-0' : '-translate-y-[200rem]'} absolute left-0 right-0 bottom-0 top-0 overflow-y-auto overflow-x-hidden transition-all duration-300 bg-fadeGray dark:bg-darkBlue text-[#4b4b4b] dark:text-fadeGray flex flex-col px-56 max-[900px]:px-10  z-20`}
        >
            <div className='w-full py-10 flex items-center justify-end'>
                <button
                    onClick={toggleDrawer}
                    className='text-3xl'
                    aria-label='Close Navigation Drawer'
                >
                    <RxCross2 />
                </button>
            </div>
            <ul className='w-full flex flex-col items-center justify-center flex-1'>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<HiOutlineIdentification />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('about')}}
                >
                    <span className='drop-shadow-md'>
                        <HiOutlineIdentification />
                    </span>
                    <span className='drop-shadow-md'>About me</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<PiBracketsCurlyBold />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('skills')}}
                >
                    <span className='drop-shadow-md'>
                        <PiBracketsCurlyBold />
                    </span>
                    <span className='drop-shadow-md'>Skills</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<MdCardTravel />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('experience')}}
                >
                    <span className='drop-shadow-md'>
                        <MdCardTravel />
                    </span>
                    <span className='drop-shadow-md'>Experience</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<FaHammer />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('projects')}}
                >
                    <span className='drop-shadow-md'>
                        <FaHammer />
                    </span>
                    <span className='drop-shadow-md'>Projects</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<GiGraduateCap />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('education')}}
                >
                    <span className='drop-shadow-md'>
                        <GiGraduateCap />
                    </span>
                    <span className='drop-shadow-md'>Education</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<LiaMedalSolid />)}
                    onMouseLeave={handleLeave}
                    onClick={()=>{handleClick('certificates')}}
                >
                    <span className='drop-shadow-md'>
                        <LiaMedalSolid />
                    </span>
                    <span className='drop-shadow-md'>Certificates</span>
                </li>
                <li className='absolute right-5 -bottom-10 flex items-center justify-center w-96 h-96 max-[600px]:hidden'>
                    <span className='w-full h-full text-[24rem] text-gray dark:text-neon opacity-30'>
                        {/* Display hovered icon */}
                        {hoveredIcon}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Drawer;