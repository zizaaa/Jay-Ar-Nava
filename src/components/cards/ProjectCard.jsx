import { FaExternalLinkAlt } from '../../icons'

function ProjectCard({data}) {
    return (
        <div className='p-5 rounded-lg flex flex-col items-center justify-center'>
            <div 
                style={{ backgroundColor: data.color }}
                className="group w-full p-5 flex items-center justify-center rounded-lg h-80 max-[700px]:h-60 max-[600px]:h-48 overflow-hidden"
            >
                <img 
                    src={data.imgLink}
                    className='h-full w-auto object-contain group-hover:scale-110 transition-all duration-300'
                    loading='lazy'
                />
            </div>
            <div className='w-full mt-3 flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-medium dark:text-white'>
                        {data.title}
                    </h1>
                    <h2 className='text-sm text-[#8c8c8c] dark:text-gray'>
                        {data.desk}
                    </h2>
                </div>
                {
                    data.link ?
                    (
                        <a 
                            href={`${data.link}`} 
                            className='p-3 rounded-md text-[#8c8c8c] dark:text-white bg-fadeGray dark:bg-fadeBlue hover:scale-110 hover:drop-shadow-md transition-all duration-200'
                        >
                            <FaExternalLinkAlt/>
                        </a>
                    ):(null)
                }
            </div>
        </div>
    )
}

export default ProjectCard