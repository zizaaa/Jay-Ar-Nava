import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork, FaChevronDown, FaChevronUp } from '../icons';

function Experience({ isDark }) {
    const [toSeeId, setToSeeId] = useState(null);

    const toggleShow = (id) => {
        if (toSeeId === id) {
            setToSeeId(null); // Collapse if the same item is clicked
        } else {
            setToSeeId(id); // Expand the new item
        }
    };

    return (
        <section className='mt-24' id='experience'>
            <h2 className='dark:text-white sm:text-4xl text-3xl font-bold'>
                Experience<span className='text-blue dark:text-neon'>.</span>
            </h2>
            <div className='xbg-fadeGray dark:bg-transparent mt-5 p-5 rounded-md'>
                <VerticalTimeline 
                    lineColor={isDark ? '#016FFF' : '#016FFF'}
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work relative"
                        contentStyle={{ background: isDark ? '#26354d80' : '', color: isDark ? '#fff' : '', borderTop: isDark ? '5px solid #64ffda':'5px solid #016FFF' }}
                        contentArrowStyle={{ borderRight: isDark ? '': '7px solid  #016FFF' }}
                        date="May - July 2024"
                        iconStyle={{ background: '#016FFF', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold sm:text-xl text-lg">Full-Stack Developer (Intern)</h3>
                        <a href='#' aria-label='AMA Computer College' className="underline vertical-timeline-element-subtitle">AMA Computer College</a>
                        <p className='text-gray'>
                            I led the design and development of our web app using the MERN stack, handling both frontend and backend tasks, including UI design, server-side logic, and API integration to ensure a seamless user experience.
                        </p>
                        <div className={`overflow-hidden transition-all duration-500 ${toSeeId === '1' ? 'max-h-screen' : 'max-h-0'}`} id='1'>
                            <div>
                                <h4 className='mt-5 my-2 text-xl font-bold'>
                                    Activities
                                </h4>
                                <ul className="list-disc ml-5 text-gray">
                                    <li>Lead the design and development of our web app project using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
                                    <li>Designed and implemented the user interface.</li>
                                    <li>Developed and managed server-side logic and API integrations.</li>
                                    <li>Handled database management and ensured overall application performance and reliability.</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='mt-5 my-2 text-xl font-bold'>
                                    Technologies
                                </h5>
                                <div className='flex flex-row items-center gap-2 flex-wrap text-gray'>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-mongodb-plain colored"></i>
                                        <span>MongoDB</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-express-original"></i>
                                        <span>Express</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-react-original colored"></i>
                                        <span>React Js</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-nodejs-plain-wordmark colored"></i>
                                        <span>Node JS</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-tailwindcss-original colored"></i>
                                        <span>Tailwind Css</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 absolute max-[515px]:text-sm max-[515px]:left-[10%] left-[30%] max-[515px]:right-[10%] right-[30%] -bottom-5 flex items-center justify-center'>
                            <button 
                                className='flex items-center gap-2 bg-fadeGray dark:bg-darkBlue px-4 py-2 rounded-full drop-shadow-md font-medium hover:scale-110 transition-all duration-200'
                                onClick={() => toggleShow('1')}
                                aria-label='Toggle Experience Details'
                            >
                                <span>
                                    {toSeeId === '1' ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                                {toSeeId === '1' ? 'See less' : 'See more'}
                            </button>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work relative"
                        contentStyle={{ background: isDark ? '#26354d80' : '', color: isDark ? '#fff' : '', borderTop: isDark ? '5px solid #64ffda':'5px solid #016FFF' }}
                        contentArrowStyle={{ borderRight: isDark ? '': '7px solid  #016FFF' }}
                        date="January 2025 - Present"
                        iconStyle={{ background: '#016FFF', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold sm:text-xl text-lg">Front End Developer</h3>
                        <a href='https://bainry.com/' target='_blank' aria-label='Bainry Company' className="underline vertical-timeline-element-subtitle">Bainry</a>
                        <p className='text-gray'>
                            Vue.js Front-End Developer at Bainry, responsible for independently designing and developing responsive, user-focused web interfaces. I manage the full front-end development lifecycle—from translating UI/UX concepts into code to deploying functional, maintainable components using Vue.js and modern web technologies.
                        </p>
                        <div className={`overflow-hidden transition-all duration-500 ${toSeeId === '2' ? 'max-h-screen' : 'max-h-0'}`} id='2'>
                            <div>
                                <h5 className='mt-5 my-2 text-xl font-bold'>
                                    Technologies
                                </h5>
                                <div className='flex flex-row items-center gap-2 flex-wrap text-gray'>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-vuejs-plain colored"></i>
                                        <span>Vue Js</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        {/* <i className="devicon-vuejs-plain colored"></i> */}
                                        <div className='h-5 w-5'>
                                            <img src="/icons/pug.png" className="h-full w-full object-cover" alt="pug image" />
                                        </div>
                                        <span>Pug Js</span>
                                    </div>
                                    <div className='flex items-center gap-2 p-1 rounded-sm'>
                                        <i className="devicon-tailwindcss-original colored"></i>
                                        <span>Tailwind Css</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 absolute max-[515px]:text-sm max-[515px]:left-[10%] left-[30%] max-[515px]:right-[10%] right-[30%] -bottom-5 flex items-center justify-center'>
                            <button 
                                className='flex items-center gap-2 bg-fadeGray dark:bg-darkBlue px-4 py-2 rounded-full drop-shadow-md font-medium hover:scale-110 transition-all duration-200'
                                onClick={() => toggleShow('2')}
                                aria-label='Toggle Experience Details'
                            >
                                <span>
                                    {toSeeId === '2' ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                                {toSeeId === '2' ? 'See less' : 'See more'}
                            </button>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
