function Contact() {
    return (
        <section className='mt-24' id='contact'>
            <h1 className='dark:text-white text-4xl font-bold'>
                Contact<span className='text-blue dark:text-neon'>.</span>
            </h1>
            <div className='mt-5 flex flex-row gap-5 flex-wrap'>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/gmail.png'
                        className='w-14 h-14'
                    />
                    <div>
                        <h6 className='text-gray'>Send me an email:</h6>
                        <a 
                            href="mailto:winfourteen@gmail.com"
                            className='dark:text-white font-medium'
                        >
                            winfourteen@gmail.com
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/linkedin.png'
                        className='w-14 h-14'
                    />
                    <div>
                        <h6 className='text-gray'>My LinkedIn account:</h6>
                        <a 
                            href="https://www.linkedin.com/in/jay-ar-nava-97b7a7223/"
                            className='dark:text-white font-medium'
                        >
                            /in/jayarnava-ziza
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/github-sign.png'
                        className='w-14 h-14'
                    />
                    <div>
                        <h6 className='text-gray'>My github account:</h6>
                        <a 
                            href="https://github.com/zizaaa"
                            className='dark:text-white font-medium'
                        >
                            /zizaaa
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/instagram.png'
                        className='w-14 h-14'
                    />
                    <div>
                        <h6 className='text-gray'>My instagram account:</h6>
                        <a 
                            href="https://www.instagram.com/zizaadesu/"
                            className='dark:text-white font-medium'
                        >
                            /zizaadesu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact