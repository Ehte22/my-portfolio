"use client"
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import hero from '../public/noxfolio.png'
import { ReactTyped } from "react-typed";

const Home = () => {

    return <>
        <div id="home" className='md:flex px-3 sm:px-12 md:gap-5 lg:gap-0  md:justify-between md:px-10 lg:px-32 xl:px-44 items-center pt-32 md:pt-24  '>
            <div className='  md:px-0'>
                <p className='text-teal-700 dark:text-teal-600 font-semibold'>Hey there, I am </p>
                <h1 className='text-5xl md:text-4xl lg:text-5xl mt-2  text-black dark:text-gray-300 font-bold'>Syed Ehtesham</h1>

                <h1 className='text-3xl  md:text-2xl lg:text-3xl my-4 text-teal-700 dark:text-teal-600  font-bold'>
                    <ReactTyped
                        strings={
                            [
                                "Front-end Developer",
                                "Back-end Developer",
                                "Mernstack Web Developer",
                            ]
                        }
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                        hideCursor={true}
                    ></ReactTyped>
                </h1>
                <p className='text-slate-500 dark:text-slate-400 lg:w-[80%] mb-5 font-semibold'>Hello! I am Web Developer. I have rich experience in web site design and building.</p>

                <div className='mt-7 '>
                    <button className=' me-2 group dark:text-teal-600  dark:hover:bg-teal-400  p-[6px] border-2 border-solid border-black dark:border-teal-600 rounded-full'>
                        <AiFillFacebook className=' group-hover:text-gray-900  text-lg' />
                    </button>
                    <button className='group dark:text-teal-600  dark:hover:bg-teal-400 mx-2  p-[6px] border-2 border-solid border-black dark:border-teal-600 rounded-full'>
                        <FaInstagram className=' group-hover:text-gray-900 text-lg' />
                    </button>
                    <button className='group dark:text-teal-600  dark:hover:bg-teal-400 mx-2  p-[6px] border-2 border-solid border-black dark:border-teal-600 rounded-full'>
                        <FaGithub className=' group-hover:text-gray-900 text-lg' />
                    </button>
                    <button className='group dark:text-teal-600  dark:hover:bg-teal-400 mx-2  p-[6px] border-2 border-solid border-black dark:border-teal-600 rounded-full'>
                        <FaLinkedinIn className=' group-hover:text-gray-900 text-lg' />
                    </button>
                </div>
            </div>


            <div className="relative mt-14 lg:mt-0 ">
                <div className="hidden box-shadow-light md:block bg-gray-100 dark:bg-gray-900 dark:box-shadow-dark h-[78%] w-full  absolute bottom-0 "
                    style={{ boxShadow: '' }} ></div>
                <Image className='relative mx-auto px-16 md:px-0 ' src={hero} alt="Hero Image" />
            </div>



        </div >

    </>
}

export default Home