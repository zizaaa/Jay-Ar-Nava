import { useState, useRef, useEffect } from 'react';
import { ProjectCard, ProjectList } from '../links';
import { FaChevronDown, FaChevronUp } from '../icons';

function Projects() {
    const [isShowMore, setIsShowMore] = useState(false);
    const [maxHeight, setMaxHeight] = useState('56rem');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isShowMore ? `${contentRef.current.scrollHeight}px` : '56rem');
        }
    }, [isShowMore]);

    return (
        <section className='mt-24' id='projects'>
            <h1 className='dark:text-white text-4xl font-bold'>
                Projects<span className='text-blue dark:text-neon'>.</span>
            </h1>
            <div
                ref={contentRef}
                className={`grid grid-cols-2 max-[500px]:grid-cols-1 transition-all duration-300 overflow-hidden mt-5`}
                style={{ maxHeight: maxHeight }}
            >
                {ProjectList.map((data, index) => (
                    <ProjectCard data={data} key={index} />
                ))}
            </div>
            <div className='w-full flex items-center justify-center'>
                <button
                    className='flex items-center gap-2 text-black dark:text-white bg-fadeGray dark:bg-fadeBlue px-4 py-2 rounded-full drop-shadow-md font-medium hover:scale-110 transition-all duration-200'
                    onClick={() => setIsShowMore(!isShowMore)}
                >
                    <span>
                        {isShowMore ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                    {isShowMore ? 'See Less' : 'See More'}
                </button>
            </div>
        </section>
    );
}

export default Projects;
