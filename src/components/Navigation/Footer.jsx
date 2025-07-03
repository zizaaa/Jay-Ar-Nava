function Footer({ isDark }) {
    const handleNavigate = (path) => {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className='border-t-[1px] border-gray mt-5 p-5'>
            <div className='flex flex-row max-[700px]:flex-col gap-2 max-[500px]:items-start items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={isDark ? '/logo_2.png' : '/logo_blue.png'} className='w-10 h-10' alt="Jay Ar Nava Full Stack Developer logo"/>
                    <h2 className='font-bold dark:text-white'>Jay Ar Nava</h2>
                </div>
                <ul className='flex flex-row max-[500px]:flex-col max-[500px]:mt-5 gap-5 text-gray font-medium cursor-pointer'>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('start')}>
                        Start
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('skills')}>
                        Skills
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('experience')}>
                        Experience
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('projects')}>
                        Projects
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('education')}>
                        Education
                    </li>
                    <li className='hover:underline transition-all duration-200' onClick={() => handleNavigate('certificates')}>
                        Certificates
                    </li>
                </ul>
            </div>
            <div className='flex flex-row max-[860px]:flex-col items-center justify-between mt-10'>
                <div className='text-gray text-[12px] w-full text-center max-[860px]:w-full gap-1 flex flex-col max-[860px]:items-center max-[860px]:mt-5'>
                    <span>
                        This portfolio is open source. Feel free to use it, but don't forget to leave a ⭐ on the repo. You can find
                        the repository <a href='https://github.com/zizaaa/Jay-Ar-Nava' aria-label='source code repository' target="_blank" className='font-medium underline'>here</a>.
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
