import React from 'react'
import { GrCopy,BsChatDots } from '../icons'

function Hero() {
  return (
    <section className='mt-10' id='hero'>
        <div className='w-full flex items-center justify-center'>
            <h1 className='text-darkerGray dark:text-lighterGray bg-semiGray dark:bg-darkerGray py-3 px-5 rounded-full font-medium text-lg'>
                Kumusta! 
            <span className='mx-2'>👋</span>
                I'm Jay Ar Nava
            </h1>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <h2 className='text-6xl font-bold text-center dark:text-gray'>
                A <span className='text-blue dark:text-neon'>full-stack web developer</span> with a focus on <span className='text-blue dark:text-neon'>front-end development</span>.
            </h2>
        </div>
        <div className='flex items-center justify-center mt-10'>
            <ul className='flex items-center gap-5'>
                <li className='flex gap-2 items-center dark:text-lighterGray'>
                    <span className='bg-semiGray dark:bg-darkerGray px-3 py-1 rounded-lg font-medium'>100k+</span>
                    <div className='flex flex-col'>
                        <p className='text-sm'>Lines of</p>
                        <p className='text-sm'>code written</p>
                    </div>
                </li>
                <span className='h-6 w-[1px] border-[1px] border-dashed border-darkGray dark:border-lighterGray'></span>
                <li className='flex gap-2 items-center dark:text-lighterGray'>
                    <span className='bg-semiGray dark:bg-darkerGray px-3 py-1 rounded-lg font-medium'>2k+</span>
                    <div>
                        <p className='text-sm'>Cups of</p>
                        <p className='text-sm'>coffee consumed</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='flex items-center justify-center mt-10 gap-5'>
            <button className='bg-darkerGray dark:bg-semiGray px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2 text-semiGray dark:text-night'>
                <span>
                    <GrCopy/>
                </span>
                Resume
            </button>
            <button className='bg-semiGray dark:bg-darkerGray dark:text-gray px-6 py-2 rounded-full text-xl font-medium flex items-center justify-center gap-2'>
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