"use client"
import Link from 'next/link'
import { IoHomeOutline, IoMenuSharp } from "react-icons/io5"
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { GrResume } from "react-icons/gr";
import { BsTelephoneForward } from "react-icons/bs";
import { IoMoon } from "react-icons/io5"
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return <>
        <div className="navbar  dark:bg-gray-900  bg-white  border-b-teal-500 border-b-2 bg-gradient-to-r  flex justify-between items-center px-3 lg:px-20 fixed z-20">

            <div className="">
                <a className="lg:text-2xl dark:text-teal-600 md:text-xl text-2xl font-bold">Portfolio</a>
            </div>
            <div className='hidden md:block dark:text-gray-300'>
                <Link href="/#home" className='font-semibold md:mx-2 lg:mx-4 hover:text-teal-600'>Home</Link>
                <Link href="/#about" className='font-semibold md:mx-2 lg:mx-4 hover:text-teal-600'>About</Link>
                <Link href="/#skills" className='font-semibold md:mx-2 lg:mx-4 hover:text-teal-600'>Skills</Link>
                <Link href="/#projects" className='font-semibold md:mx-2 lg:mx-4 hover:text-teal-600'>projects</Link>
                <Link href="/#contact" className='font-semibold md:mx-2 lg:mx-4 hover:text-teal-600'>Contact</Link>
            </div>
            {/* <div className='bg-gradient-to-r from-teal-500 via-white to-white border-2 hidden md:block border-white hover:border-2  px-3 py-1  hover:border-teal-500'>
                <a href="" className='lg:text-lg text-base font-semibold '>Download CV</a>
            </div> */}

            {/* <button className='bg-gray-200 px-3 p-1 font-bold rounded-2xl text-lg' onClick={e => setMode(mode === "light" ? "dark" : "light")}>
                Dark  <i className='ms-2'><IoMoon /></i>
            </button> */}

            <div>
                <ThemeToggle />

                <div className='md:hidden ms-3 z-30'>
                    <div className="dropdown dropdown-left">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <IoMenuSharp className='h-8 w-8 dark:text-gray-300' />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='my-2'>
                                <Link href="/#home" className='font-semibold  p-2 mx-4 '>
                                    Home
                                </Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/#about" className='font-semibold p-2 mx-4'>
                                    About
                                </Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/#skills" className='font-semibold p-2 mx-4'>
                                    Skills
                                </Link>
                            </li>
                            <li className='my-2'>
                                <Link href="/#projects" className='font-semibold p-2 mx-4'>
                                    projects
                                </Link>
                            </li>

                            <li className='my-2'>
                                <Link href="/#contact" className='font-semibold p-2 mx-4'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>



        </div >

    </>
}

export default Navbar