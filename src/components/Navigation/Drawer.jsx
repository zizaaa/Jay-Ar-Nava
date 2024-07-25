import React, { useState } from 'react';
import {
    PiBracketsCurlyBold,
    MdCardTravel,
    FaHammer,
    GiGraduateCap,
    LiaMedalSolid,
    RxCross2
} from '../../icons';

function Drawer({ isShowDrawer, toggleDrawer }) {
    const [hoveredIcon, setHoveredIcon] = useState(<PiBracketsCurlyBold />);

    // Function to handle hover over list items
    const handleHover = (icon) => {
        setHoveredIcon(icon);
    };

    // Reset hovered icon when mouse leaves list item
    const handleLeave = () => {
        setHoveredIcon(<PiBracketsCurlyBold />);
    };

    return (
        <div
            className={`${isShowDrawer ? 'translate-y-0' : '-translate-y-[50rem]'} absolute left-0 right-0 bottom-0 top-0 overflow-y-auto overflow-x-hidden transition-all duration-200 bg-grayish dark:bg-semiNight text-darkerGray dark:text-lighterGray flex flex-col`}
        >
            <div className='w-full py-10 flex items-center justify-end px-10'>
                <button
                    onClick={toggleDrawer}
                    className='text-3xl'
                >
                    <RxCross2 />
                </button>
            </div>
            <ul className='w-full flex flex-col items-center justify-center px-10 py-20 flex-1'>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<PiBracketsCurlyBold />)}
                    onMouseLeave={handleLeave}
                >
                    <span>
                        <PiBracketsCurlyBold />
                    </span>
                    <span>Skills</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<MdCardTravel />)}
                    onMouseLeave={handleLeave}
                >
                    <span>
                        <MdCardTravel />
                    </span>
                    <span>Experience</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<FaHammer />)}
                    onMouseLeave={handleLeave}
                >
                    <span>
                        <FaHammer />
                    </span>
                    <span>Projects</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<GiGraduateCap />)}
                    onMouseLeave={handleLeave}
                >
                    <span>
                        <GiGraduateCap />
                    </span>
                    <span>Education</span>
                </li>
                <li
                    className='flex items-center gap-5 text-3xl font-bold w-full cursor-pointer hover:translate-x-10 transition-all duration-200 ease-linear p-5 z-10'
                    onMouseEnter={() => handleHover(<LiaMedalSolid />)}
                    onMouseLeave={handleLeave}
                >
                    <span>
                        <LiaMedalSolid />
                    </span>
                    <span>Certificates</span>
                </li>
                <div className='absolute right-5 -bottom-10 flex items-center justify-center w-96 h-96 max-[600px]:hidden'>
                    <span className='w-full h-full text-[24rem] text-gray dark:text-darkerGray'>
                        {/* Display hovered icon */}
                        {hoveredIcon}
                    </span>
                </div>
            </ul>
        </div>
    );
}

export default Drawer;