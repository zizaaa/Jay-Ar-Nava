import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { GrCertificate,FaExternalLinkAlt } from '../icons';

function Certificates({isDark}) {
    return (
        <section className='mt-24' id='certificates'>
            <h1 className='dark:text-white text-4xl font-bold'>
                Certificates<span className='text-blue dark:text-neon'>.</span>
            </h1>
            <div className='bg-fadeGray dark:bg-transparent mt-5 p-5 rounded-md'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work relative"
                        date="April - July 25 2023"
                        contentStyle={{ background: isDark ? '#26354d80' : '', color: isDark ? '#fff' : '' }}
                        iconStyle={{ background: '#016FFF', color: '#fff' }}
                        icon={<GrCertificate />}
                    >
                        <h1 className="vertical-timeline-element-title font-bold text-xl">KodeGo Bootcamp Certificate</h1>
                        <h4 className="vertical-timeline-element-subtitle">Full Stack Web Development Completion</h4>
                        <p className='text-gray'>
                            I successfully completed the 16-week Full Stack Web Development Bootcamp at KodeGo. During this course, I received awards for Best Mini Project, Top Student, and Leadership, reflecting my commitment and performance throughout the program.
                        </p>
                        <div className='group mt-5 relative'>
                            <a 
                                href='/certificates/cert_1.pdf' 
                                className='group cursor-pointer'
                            >
                                <img 
                                    src='/certificates/certificate.jpg'
                                    className='group-hover:scale-125 transition-all duration-200'
                                />
                                <span className='absolute -right-7 -top-3 flex items-center justify-center text-[#8c8c8c] dark:text-fadeBlue scale-0 group-hover:scale-100 transition-all duration-200 text-xl'>
                                    <FaExternalLinkAlt/>
                                </span>
                            </a>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Certificates