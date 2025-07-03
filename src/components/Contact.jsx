function Contact() {
    return (
        <section className='mt-24' id='contact'>
            <h2 className='dark:text-white text-4xl font-bold'>
                Contact<span className='text-blue dark:text-neon'>.</span>
            </h2>
            <div className='mt-5 flex flex-row gap-5 flex-wrap'>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/gmail.png'
                        className='w-14 h-14'
                        alt="Jay Ar Nava's Gmail account"
                    />
                    <div>
                        <span className='text-gray'>Send me an email:</span>
                        <a 
                            href="mailto:winfourteen@gmail.com"
                            className='dark:text-white font-medium'
                            target="_blank"
                            aria-label="Send an email"
                        >
                            winfourteen@gmail.com
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/linkedin.png'
                        className='w-14 h-14'
                        alt="Jay Ar Nava's LinkedIn account"
                    />
                    <div>
                        <span className='text-gray'>My LinkedIn account:</span>
                        <a 
                            href="https://www.linkedin.com/in/jay-ar-nava-97b7a7223/"
                            className='dark:text-white font-medium'
                            target="_blank"
                            aria-label="Visit my LinkedIn profile"
                        >
                            /in/jayarnava-ziza
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/github-sign.png'
                        className='w-14 h-14'
                        alt="Jay Ar Nava's GitHub account"
                    />
                    <div>
                        <span className='text-gray'>My github account:</span>
                        <a 
                            href="https://github.com/zizaaa"
                            className='dark:text-white font-medium'
                            target="_blank"
                            aria-label="Visit my GitHub profile"
                        >
                            /zizaaa
                        </a>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-3 p-5 rounded-md'>
                    <img 
                        src='/icons/instagram.png'
                        className='w-14 h-14'
                        alt="Jay Ar Nava's Instagram account"
                    />
                    <div>
                        <span className='text-gray'>My instagram account:</span>
                        <a 
                            href="https://www.instagram.com/zizaadesu/"
                            className='dark:text-white font-medium'
                            target="_blank"
                            aria-label="Visit my Instagram profile"
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