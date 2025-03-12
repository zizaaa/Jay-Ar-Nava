import React from 'react'

function Skills() {
    return (
        <section className='mt-24' id='skills'>
            <h1 className='dark:text-white text-4xl font-bold'>
                Skills<span className='text-blue dark:text-neon'>.</span>
            </h1>
            <div className='mt-10 w-full'>
                <h2 className='text-xl text-slate-500'>Technologies and tools</h2>
                <div className='flex gap-2 w-full items-center max-[500px]:justify-center flex-wrap mt-5'>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>HTML</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>CSS</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Javascript</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Typescript</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Bootstrap</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Tailwind Css</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>React Js</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Vue Js</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                            className="min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200"
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Express Js</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Node Js</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>MongoDB</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>PostgreSQL</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>GIT</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Github</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" 
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>Vscode</p>
                    </div>
                    <div className='group bg-fadeGray dark:bg-fadeBlue max-[500px]:w-20 max-[500px]:h-20 w-28 h-28 flex min-[500px]:flex-row flex-col items-center justify-center rounded-md overflow-hidden relative'>
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                            className='min-[500px]:h-14 min-[500px]:w-14 h-10 w-10 min-[500px]:group-hover:translate-x-9 min-[500px]:group-hover:translate-y-9 min-[500px]:group-hover:h-24 min-[500px]:group-hover:w-24 min-[500px]:group-hover:opacity-30 min-[500px]:transition-all min-[500px]:duration-200'
                        />
                        <p className='min-[500px]:absolute dark:text-slate-300 min-[500px]:font-bold text-center max-[500px]:text-sm max-[500px]:mt-1 min-[500px]:group-hover:scale-100 min-[500px]:scale-0 min-[500px]:transition-all duration-200'>NPM</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills