function Education() {
    return (
        <section className='mt-24' id='education'>
            <h2 className='dark:text-white sm:text-4xl text-3xl font-bold'>
                Education<span className='text-blue dark:text-neon'>.</span>
            </h2>
            <div className='mt-5 grid grid-cols-2 max-[650px]:grid-cols-1 gap-2'>
                <div className='flex flex-row'>
                    <div className='bg-white p-1 rounded-md min-h-28 max-h-28 min-w-28 max-w-28 flex items-center justify-center'>
                        <img 
                            src='/education/Yobhel-logo.png'
                            className='h-full w-full'
                            alt="Jay Ar Nava Secondary Education School logo"
                            loading="lazy"
                        />
                    </div>
                    <div className='ms-5'>
                        <span className='text-gray text-sm leading-3'>Strand:</span>
                        <h3 className='dark:text-white font-medium mb-2'>Computer System Servicing</h3>
                        <span className='text-gray text-sm'>2019-2021</span>
                        <h4 className='text-gray text-[0.90rem]'>Yobhel Christian Academy Inc.</h4>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='bg-white p-1 rounded-md min-h-28 max-h-28 min-w-28 max-w-28 flex items-center justify-center'>
                        <img 
                            src='/education/AMA-Logo.png'
                            className='h-full w-full object-contain'
                            alt="Jay Ar Nava Tertiary Education School logo"
                            loading="lazy"
                        />
                    </div>
                    <div className='ms-5'>
                        <span className='text-gray text-sm leading-3'>Degree:</span>
                        <h3 className='dark:text-white font-medium mb-2'>Bachelor of Science in Information Technology</h3>
                        <span className='text-gray text-sm'>2021-2024</span>
                        <h4 className='text-gray text-[0.90rem]'>AMA Computer College - Naga</h4>
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default Education