import React from 'react'
import { GrCopy,BsChatDots } from '../icons'

function Hero() {
  return (
    <section className='mt-10' id='hero'>
        <div className='w-full flex items-center justify-center'>
            <h1 className='text-darkerGray dark:text-gray bg-fadeGray dark:bg-fadeBlue py-3 px-5 rounded-full font-medium text-lg'>
                Kumusta! 
            <span className='mx-2'>👋</span>
                I'm Jay Ar Nava
            </h1>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <h2 className='text-6xl max-[600px]:text-5xl font-bold text-center dark:text-white'>
                A <span className='text-blue dark:text-neon'>full-stack web developer</span> with a focus on <span className='text-blue dark:text-neon'>front-end development</span>.
            </h2>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <ul className='flex items-center gap-5'>
                <li className='flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray'>
                    <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>8+</span>
                    <div className='flex flex-col'>
                        <p className='text-sm'>Hours</p>
                        <p className='text-sm'>coding a day</p>
                    </div>
                </li>
                <span className='h-6 w-[1px] border-[1px] border-dashed border-darkGray dark:border-gray'></span>
                <li className='flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray'>
                    <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>100k+</span>
                    <div className='flex flex-col'>
                        <p className='text-sm'>Lines of</p>
                        <p className='text-sm'>code written</p>
                    </div>
                </li>
                <span className='h-6 w-[1px] border-[1px] border-dashed border-darkGray dark:border-gray'></span>
                <li className='flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray'>
                    <span className='bg-fadeGray dark:bg-fadeBlue px-3 py-1 rounded-lg font-medium dark:text-white'>2k+</span>
                    <div>
                        <p className='text-sm'>Cups of</p>
                        <p className='text-sm'>coffee consumed</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='flex items-center justify-center mt-10 gap-5'>
            <button className='bg-blue dark:bg-neon px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2 text-fadeGray dark:text-darkBlue'>
                <span>
                    <GrCopy/>
                </span>
                Resume
            </button>
            <button className='bg-fadeGray dark:bg-fadeBlue dark:text-white px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2'>
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