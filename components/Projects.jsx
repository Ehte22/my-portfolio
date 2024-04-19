import React from 'react'

const Projects = () => {
    return <>
        <div id='projects' className='px-3 py-16 sm:px-12 md:px-10 lg:px-32 xl:px-44'>

            <h3 className='text-teal-700 mt-5 dark:text-teal-600 text-2xl  font-semibold'>My Projects</h3>

            <h1 className='text-3xl dark:text-gray-300 md:text-4xl mt-5 font-semibold leading-tight'>Explore My Popular Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-14'>

                <div className=' md:mx-10 md:mb-10'>
                    <img className='w-full' src="https://separateweb.com/niwax-template/images/portfolio/image-9.jpg" alt="" />
                    <h1 className='text-2xl dark:text-gray-300 mt-5 font-semibold '>Portfolio Website</h1>
                    <h5 className='text-xl mt-3 text-slate-500 dark:text-gray-400'>Web Design</h5>
                </div>
                {/* <div className='relative md:mx-10 md:mb-10'>
                    <div className=' absolute w-full h-full flex flex-col justify-center items-center left-0 bg-blue-200 trasnition duration-500 ease-out hover:'>
                        <h1 className='text-2xl dark:text-gray-300 mt-5 font-semibold '>Portfolio Website</h1>
                        <h5 className='text-xl mt-3 text-slate-500 dark:text-gray-400'>Web Design</h5>
                    </div>
                    <img className='w-full' src="https://separateweb.com/niwax-template/images/portfolio/image-9.jpg" alt="" />
                </div> */}

                {/* <div className='md:mx-10 md:mb-10 relative overflow-hidden '>
                    <img className='w-full transition duration-500 ease-in-out transform hover:translate-x-2 hover:translate-y-2' src="https://separateweb.com/niwax-template/images/portfolio/image-9.jpg" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
                        <h1 className='text-2xl mt-5 font-semibold '>Portfolio Website</h1>
                        <h5 className='text-xl mt-3 text-slate-500'>Web Design</h5>
                    </div>
                </div> */}

                <div className='mt-12 md:mt-0 md:mx-10'>
                    <img className='w-full' src="https://separateweb.com/niwax-template/images/portfolio/image-3.jpg" alt="" />
                    <h1 className='text-2xl dark:text-gray-300  mt-5 font-semibold '>Ecommerce Development</h1>
                    <p className='text-xl mt-3 text-slate-500 dark:text-gray-400'>Web Application</p>
                </div>

                <div className='mt-12 md:mt-0 md:mx-10 md:mb-10 '>
                    <img className='w-full' src="https://separateweb.com/niwax-template/images/portfolio/image-8.jpg" alt="" />
                    <h1 className='text-2xl dark:text-gray-300 mt-5 font-semibold '>Restaurant Website</h1>
                    <p className='text-xl mt-3 text-slate-500 dark:text-gray-400'>Web App</p>
                </div>

            </div>

        </div>
    </>
}

export default Projects