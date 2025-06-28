function Education() {
    return (
        <section className='mt-24' id='education'>
            <h1 className='dark:text-white text-4xl font-bold'>
                Education<span className='text-blue dark:text-neon'>.</span>
            </h1>
            <div className='mt-5 grid grid-cols-2 max-[650px]:grid-cols-1 gap-2'>
                <div className='flex flex-row'>
                    <div className='bg-white p-1 rounded-md min-h-28 max-h-28 min-w-28 max-w-28 flex items-center justify-center'>
                        <img 
                            src='/education/Yobhel-logo.png'
                            className='h-full w-full'
                        />
                    </div>
                    <div className='ms-5'>
                        <p className='text-gray text-sm leading-3'>Strand:</p>
                        <p className='dark:text-white font-medium mb-2'>Computer System Servicing</p>
                        <p className='text-gray text-sm'>2019-2021</p>
                        <p className='text-gray text-[0.90rem]'>Yobhel Christian Academy Inc.</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='bg-white p-1 rounded-md min-h-28 max-h-28 min-w-28 max-w-28 flex items-center justify-center'>
                        <img 
                            src='/education/AMA-Logo.png'
                            className='h-full w-full object-contain'
                        />
                    </div>
                    <div className='ms-5'>
                        <p className='text-gray text-sm leading-3'>Degree:</p>
                        <p className='dark:text-white font-medium mb-2'>Bachelor of Science in Information Technology</p>
                        <p className='text-gray text-sm'>2021-2024</p>
                        <p className='text-gray text-[0.90rem]'>AMA Computer College - Naga</p>
                    </div>
                </div>
            </div>
        </section>
            
    )
}

export default Education