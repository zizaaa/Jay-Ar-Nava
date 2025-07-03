function AboutMe() {
    return (
        <section className='mt-24' id='about'>
            <h2 className='dark:text-white text-4xl font-bold'>
                About me<span className='text-blue dark:text-neon'>.</span>
            </h2>
            <div  className='flex flex-row max-[800px]:flex-col gap-5'>
                <div className='flex-1'>
                    <p className='text-xl text-gray dark:text-fadeGray mt-5 indent-20 max-[800px]:indent-5'>
                        I'm Jay Ar Nava, a <span className='text-blue dark:text-neon font-semibold'>full-stack web developer</span> with expertise in technologies like <span className='text-blue dark:text-neon font-semibold'>React.js</span>, <span className='text-blue dark:text-neon font-semibold'>TypeScript</span>, <span className='text-blue dark:text-neon font-semibold'>Express.js</span>, <span className='text-blue dark:text-neon font-semibold'>Node.js</span>, <span className='text-blue dark:text-neon font-semibold'>PostgreSQL</span>, <span className='text-blue dark:text-neon font-semibold'>MongoDB</span>, <span className='text-blue dark:text-neon font-semibold'>Bootstrap</span>, and <span className='text-blue dark:text-neon font-semibold'>Tailwind CSS</span>. Known as "Ziza," I've been passionate about computers since I was sixteen and began programming at eighteen, constantly learning and expanding my skills.
                    </p>
                    <p className='text-xl text-gray dark:text-fadeGray mt-5 indent-20 max-[800px]:indent-5'>
                        I graduated in September 2024 with a Bachelor of Science in Information Technology, major in <span className='text-blue dark:text-neon font-semibold'>Web Application Development</span>. I also completed a 3-month <span className='text-blue dark:text-neon font-semibold'>Full-stack Web Development</span> course at the KodeGo Bootcamp, where I received awards as a Top 5 Student, for Leadership, and for Best Mini Project 1. Currently, I'm a freelancer, collaborating with clients to create dynamic and efficient web applications.
                    </p>
                </div>
                <div className='bg-blue-300 flex items-center justify-end relative w-72 h-96 max-[800px]:mt-5'>
                    <div className='absolute inset-0 z-0 top-2 -right-3 left-5 -bottom-5 border-4 border-neon rounded-md'></div> {/* Background frame */}
                    
                    <figure className='relative z-10'> {/* Foreground image */}
                        <img 
                            src='/3.JPG'
                            alt='Jay Ar Nava'
                            className='w-full h-full rounded-md'
                            loading='lazy'
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default AboutMe