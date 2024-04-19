
import Image from 'next/image'
import React from 'react'
import { FaCss3Alt, FaHtml5, FaMobileAlt, FaReact } from "react-icons/fa"
import frontend from "../public/frontend.png"
import backend from "../public/backend.png"
import responsive from "../public/responsive.png"
import { FaLaptop } from "react-icons/fa"

const Skills = () => {

    return <>
        <div id='skills' className='bg-gray-100 dark:bg-gray-800  px-3 pt-5 pb-16 sm:px-12 md:px-10 lg:px-32 xl:px-44'>

            <div className=' md:flex md:justify-between md:gap-7  lg:gap-10 mt-24' >

                <div className='md:w-80 lg:w-[450px] '>
                    <h3 className='text-teal-700 dark:text-teal-600 text-2xl font-semibold'>My Skills</h3>
                    <h1 className='dark:text-gray-300 text-4xl mt-5 font-semibold leading-tight'>Let’s Explore Popular Skills & Experience</h1>
                    <p className='mt-4 mb-7 text-justify text-slate-400'>Harnessing a powerful blend of HTML, CSS, and JavaScript, I craft immersive and visually captivating user interfaces that engage and delight. Leveraging the flexibility and efficiency of React, along with the server-side rendering capabilities of Next.js, I ensure seamless and lightning-fast web experiences.</p>
                    <p className='mt-4 mb-7 text-justify text-slate-400'>On the backend, I harness the robustness of Node.js to build scalable and efficient server applications, seamlessly integrated with MongoDB for flexible and high-performance data storage. Additionally, my proficiency extends to SQL databases, enabling me to design and manage relational data structures with precision and reliability. With this comprehensive skill set, I'm equipped to tackle diverse challenges in web development, delivering innovative solutions that drive business growth and user satisfaction.</p>

                </div>

                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-5  mt-10'>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600   text-center'>
                            <div className='flex justify-center h-[100px] md:h-[80px]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>Html</p>
                            <p className='dark:bg-gray-300  dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>95%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center h-[100px] md:h-[80px]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>Css</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>90%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center  h-[100px] md:h-[80px]'>
                                <img src="../javascript-logo.webp" alt="" />
                                {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> */}
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>JS</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>85%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center  h-[100px] md:h-[80px]'>
                                {/* <img src="../react.svg" alt="" /> */}
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>React</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>85%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center  h-[100px] md:h-[80px] '>
                                {/* <img src="../next-js.svg" alt="" /> */}
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>Next JS</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>80%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center h-[100px] md:h-[80px]'>
                                {/* <img src="../nodeJs.svg" alt="" /> */}
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>Node JS</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>80%</p>
                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center h-[100px] md:h-[80px]'>
                                {/* <img src="../mongoDb.svg" alt="" /> */}
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>MongoDB</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>75%</p>

                        </div>

                        <div className='bg-white dark:bg-gray-900 rounded-2xl py-5 md:py-4 border border-solid border-teal-600  text-center'>
                            <div className='flex justify-center h-[100px] md:h-[80px]'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                                {/* <img src="../mysql.png" alt="" /> */}
                            </div>
                            <p className='mt-2 text-xl dark:text-gray-300 font-bold'>MySQL</p>
                            <p className='dark:bg-gray-300 dark:text-gray-900 mt-2 rounded-xl text-lg font-semibold text-white mx-3 py-1 bg-black'>70%</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* <div className='mt-20'>
                <h1 className='mb-12 text-3xl font-bold text-center'>What I Offer</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto'>
                            <Image src={frontend} height={80} alt='' />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Front-end Development</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3  w-[20%] md:w-auto'>
                            <Image src={backend} height={80} alt='' />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Back-end Development</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto'>
                            <Image src={responsive} height={80} alt='' />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Responsive Websites</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto'>
                            <i className=''><FaMobileAlt height={80} className='md:text-[42px] text-[42px]  sm:text-[80px]' /></i>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Mobile App Development</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto md:me-2'>
                            <i className=''><FaLaptop className='md:text-[35px] text-[35px]  sm:text-[80px]' /></i>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>Web Design</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%]  md:w-auto lg:me-2'>
                            <i className=''><FaReact className='md:text-[42px] text-[42px]  sm:text-[80px]' /></i>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2'>React Developer</h3>
                            <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque est consectetur officia.</p>
                        </div>
                    </div>

                </div>
            </div> */}

        </div>
    </>
}

export default Skills