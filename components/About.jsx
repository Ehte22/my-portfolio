import React from 'react'
import { FaDatabase } from "react-icons/fa"
import { GrMonitor } from "react-icons/gr";
import { FaMobileAlt, FaReact } from "react-icons/fa"
import responsive from "../public/responsive.png"
import { FaLaptop } from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return <>
        <div id='about' className='py-20 px-3 sm:px-12 md:px-10 lg:px-32 xl:px-44'>

            <h3 className='text-teal-700 dark:text-teal-600 text-2xl font-semibold'>About Me</h3>

            <div className=' md:grid md:grid-cols-2 md:gap-12 lg:gap-20'>

                <div className='mt-5'>
                    <h1 className='mb-5 dark:text-gray-300 text-3xl font-bold'>Creative Web Developer</h1>
                    <div className='my-4 text-slate-400  text-justify'>
                        My name is Ehtesham, and I am a creative web developer passionate about crafting engaging and user-friendly digital experiences. With a keen eye for design and a knack for problem-solving, I specialize in translating ideas into visually stunning and functional websites. My journey in web development has equipped me with a diverse skill set, including proficiency in HTML, CSS, JavaScript, and various frameworks like React. Whether it's building responsive layouts, optimizing performance, or implementing interactive features, I strive to deliver high-quality solutions that exceed client expectations. With each project, I aim to push the boundaries of innovation and create impactful online experiences that leave a lasting impression.
                    </div>

                </div>

                <div className='mt-8 md:mt-5'>

                    <h1 className='mb-5 dark:text-gray-300 text-3xl font-bold'>Connect With Me</h1>

                    <div className='my-4 text-slate-400 text-justify'>
                        Let's connect and collaborate! Whether you have a project in mind, want to discuss a potential opportunity, or simply want to chat about all things web development, I'm always open to new connections. Feel free to reach out to me via email or send me a message through the contact form below. I look forward to hearing from you and exploring how we can work together to bring your ideas to life.
                    </div>

                    <div className='mt-8'>
                        <Link href="../my-cv.pdf" className="bg-teal-600 px-4 py-2 rounded-lg text-lg text-gray-200 font-semibold mt-3">Download CV</Link>
                        <Link href="/#contact" className="bg-gray-900 dark:bg-gray-300 dark:text-gray-900 ms-5 px-4 py-2 rounded-lg text-lg text-gray-200 font-semibold mt-3">Contact me</Link>
                    </div>

                </div>
            </div>

            <div className='mt-16'>
                <h1 className='mb-12 text-3xl dark:text-gray-300 font-bold text-center'>What I Offer</h1>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-7'>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%]  md:w-auto lg:me-2'>
                            <i className=''><GrMonitor className='md:text-[42px] text-[42px] dark:text-gray-400 sm:text-[80px]' /></i>
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>Front-end Development</h3>
                            <p className='text-slate-500 dark:text-gray-400'>Proficiency in coding the visual aspects of websites using HTML, CSS, and JavaScript to ensure a seamless and attractive user interface.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%]  md:w-auto lg:me-1'>
                            <i className=''><FaDatabase className='md:text-[42px] text-[42px] dark:text-gray-400 sm:text-[80px]' /></i>
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>Back-end Development</h3>
                            <p className='text-slate-500 dark:text-gray-400'>Back-end development refers to the development of server-side logic that powers websites and apps from behind the scenes.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto'>
                            <Image src={responsive} height={80} alt='' />
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>Responsive Websites</h3>
                            <p className='text-slate-500 dark:text-gray-400'>Capability to develop websites that adapt and function flawlessly across various devices and screen sizes using coding techniques.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto'>
                            <i className=''><FaMobileAlt height={80} className='md:text-[42px] text-[42px] dark:text-gray-400 sm:text-[80px]' /></i>
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>Mobile App Development</h3>
                            <p className='text-slate-500 dark:text-gray-400'>Proficiency in coding practices that ensure websites function seamlessly on mobile devices. I will use React native for mobile app    development.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%] md:w-auto md:me-2'>
                            <i className=''><FaLaptop className='md:text-[35px] text-[35px] dark:text-gray-400  sm:text-[80px]' /></i>
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>Web Design</h3>
                            <p className='text-slate-500 dark:text-gray-400'>Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development.</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 dark:bg-gray-800 p-5 flex gap-5'>
                        <div className='mt-3 w-[20%]  md:w-auto lg:me-2'>
                            <i className=''><FaReact className='md:text-[42px] text-[42px] dark:text-gray-400 sm:text-[80px]' /></i>
                        </div>
                        <div className='dark:text-gray-300'>
                            <h3 className='text-xl font-semibold mb-2'>React Developer</h3>
                            <p className='text-slate-500 dark:text-gray-400'>React is a JavaScript library for building user interface, developed by Facebook, and I like to use react in my projects.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default About