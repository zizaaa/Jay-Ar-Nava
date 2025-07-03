import { GrCopy,BsChatDots } from '../icons'

function Hero() {

    const handleNavigate = (path) => {
        document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='mt-10' id='hero'>
            <div className='w-full flex items-center justify-center text-center'>
                <h2 className='text-white bg-fadeGray dark:bg-fadeBlue py-3 px-5 rounded-full font-medium sm:text-lg text-sm'>
                    Kumusta!
                    <span className='mx-2'>👋</span>
                    I'm Jay Ar Nava
                </h2>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <h1 className='text-6xl max-sm:text-4xl max-[400px]:text-3xl sm:font-extrabold font-bold text-center dark:text-white'>
                    A <span className='text-blue dark:text-neon'>full-stack web developer</span> with a focus on <span className='text-blue dark:text-neon'>front-end development</span>.
                </h1>
            </div>
            <div className='flex sm:items-center sm:justify-center mt-10'>
                <ul className='flex sm:flex-row flex-col items-center gap-5'>
                    <li className='flex flex-col max-sm:flex-row gap-2 sm:items-center items-start sm:text-center start sm:justify-center justify-start max-sm:w-full max-[600px]:text-center dark:text-gray'>
                        <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>8+</span>
                        <div className='flex sm:flex-col flex-row text-sm max-[350px]:text-[12px] sm:leading-[0.90rem] leading-[1.5em]'>
                            <p>Hours</p>
                            <p>coding a day</p>
                        </div>
                    </li>
                    <li className='max-sm:hidden h-6 w-[1px] border-[1px] border-solid border-darkGray dark:border-gray'></li>
                    <li className='flex flex-col max-sm:flex-row gap-2 sm:items-center items-start sm:text-center start sm:justify-center justify-start max-sm:w-full max-[600px]:text-center dark:text-gray'>
                        <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>500k+</span>
                        <div className='flex sm:flex-col flex-row text-sm max-[350px]:text-[12px] sm:leading-[0.90rem] leading-[1.5em]'>
                            <p>Lines of</p>
                            <p>code written</p>
                        </div>
                    </li>
                    <li className='max-sm:hidden h-6 w-[1px] border-[1px] border-solid border-darkGray dark:border-gray'></li>
                    <li className='flex flex-col max-sm:flex-row gap-2 sm:items-center items-start sm:text-center start sm:justify-center justify-start max-sm:w-full max-[600px]:text-center dark:text-gray'>
                        <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>2k+</span>
                        <div className='flex sm:flex-col flex-row text-sm max-[350px]:text-[12px] sm:leading-[0.90rem] leading-[1.5em]'>
                            <p>Cups of</p>
                            <p>coffee consumed</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex items-center flex-row max-[400px]:flex-col justify-center mt-10 gap-5 p-3'>
                <a href='/Resume.pdf' aria-label='Download resume' className='max-[400px]:w-full bg-blue dark:bg-neon px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2 text-fadeGray dark:text-darkBlue hover:scale-110 transition-all duration-200'>
                    <span>
                        <GrCopy/>
                    </span>
                    Resume
                </a>
                <button 
                    className='max-[400px]:w-full bg-fadeGray dark:bg-fadeBlue dark:text-white px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2 hover:scale-110 transition-all duration-200'
                    onClick={()=>{handleNavigate('contact')}}
                    aria-label='Contact'
                >
                    <span>
                        <BsChatDots/>
                    </span>
                    Contact
                </button>
            </div>
        </section>
    )
}

export default Hero