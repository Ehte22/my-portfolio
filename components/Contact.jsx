import React from 'react'
import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone, BsFillTelephoneFill } from "react-icons/bs"
import { MdOutlineMail, MdEmail } from "react-icons/md"
import { AiFillFacebook } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import { TbMessageCircle2Filled } from "react-icons/tb"
import { useRegisterMutation } from '@/redux/userApi';
import { useFormik } from 'formik';
import * as yup from "yup"
import classNames from 'classnames';

const Contact = () => {
    const [register] = useRegisterMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("name is required"),
            email: yup.string().required("email is required"),
            phone: yup.string().required("mobile number is required"),
            message: yup.string().required("please enter your message"),
        }),
        onSubmit: (values, { resetForm }) => {
            register(values)
        }
    })

    const formikClasses = arg => classNames({
        "bg-transparent dark:text-gray-300 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:rounded-xl h-full w-full ps-2": true,
        "border border-red-400 rounded-xl": formik.touched[arg] && formik.errors[arg]
    })

    return <>
        <div id='contact' className='bg-gray-100 dark:bg-gray-800 px-3 sm:px-12 md:px-10 lg:px-32 xl:px-44 py-12'>
            <div className='md:flex gap-16 mt-5 '>

                <div className='md:w-[100%]'>
                    <h3 className='text-teal-700 dark:text-teal-600 text-2xl mb-5 font-semibold'>Contact Me</h3>
                    <h1 className='text-4xl dark:text-gray-300 font-bold'>Have You Any Project? Please Drop a Message</h1>

                    <p className='text-slate-500 dark:text-gray-400 mt-5'>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>

                    <div className='flex gap-3 mt-5  dark:text-gray-400'>
                        <i className='mt-1'><IoLocationOutline className='text-2xl' /></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Address:</h3>
                            <p className='text-slate-500 dark:text-gray-400 mt-1'>Roshan Gate, Aurangabad, 431001</p>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-5 dark:text-gray-400'>
                        <i className='mt-1'><BsTelephone className='text-2xl' /></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Phone:</h3>
                            <p className='text-slate-500 dark:text-gray-400 mt-1'>+91 9665879005</p>
                        </div>
                    </div>

                    <div className='flex gap-3 mt-5 dark:text-gray-400'>
                        <i className='mt-1'><MdOutlineMail className='text-2xl' /></i>
                        <div>
                            <h3 className='text-lg font-semibold'>Email:</h3>
                            <p className='text-slate-500 dark:text-gray-400 mt-1'>syedehteshamali22@gmail.com</p>
                        </div>
                    </div>

                    <div className='mt-7 '>
                        <button className=' me-2 bg-black dark:bg-gray-950 dark:border-gray-300 p-[6px] border-2 border-solid border-black rounded-full'>
                            <AiFillFacebook className='fill-gray-100  dark:fill-gray-300 text-lg' />
                        </button>
                        <button className=' mx-2 bg-black dark:bg-gray-950 dark:border-gray-300 p-[6px] border-2 border-solid border-black rounded-full'>
                            <FaInstagram className='fill-gray-100 dark:fill-gray-300  text-lg' />
                        </button>
                        <button className=' mx-2 bg-black dark:bg-gray-950 dark:border-gray-300 p-[6px] border-2 border-solid border-black rounded-full'>
                            <FaGithub className='fill-gray-100 dark:fill-gray-300  text-lg' />
                        </button>
                        <button className=' mx-2 bg-black dark:bg-gray-950 dark:border-gray-300 p-[6px] border-2 border-solid border-black rounded-full'>
                            <FaLinkedinIn className='fill-gray-100 dark:fill-gray-300  text-lg' />
                        </button>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-900 border-none p-5 sm:w-[80%] mx-auto rounded-2xl mt-10 md:mt-0'>

                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label className='font-bold dark:text-gray-300 ms-1 block text-sm'>Name</label>
                            <div className='flex bg-gray-100 dark:bg-gray-800 h-10 mt-2 w-full rounded-xl  items-center'>
                                <IoMdContact className='text-xl dark:fill-gray-300 mx-3' />
                                <input
                                    type="text"
                                    {...formik.getFieldProps("name")}
                                    className={formikClasses("name")}
                                    placeholder='Enter your name'
                                />
                            </div>
                            {formik.errors.email && formik.touched.name && <div className='text-red-500 text-sm mt-1'>{formik.errors.name}</div>}
                        </div>
                        <div className='mt-6'>
                            <label className='font-bold dark:text-gray-300 ms-1 block text-sm'>Email</label>
                            <div className='flex bg-gray-100 dark:bg-gray-800 h-10 mt-2 w-full rounded-xl border-none items-center'>
                                <MdEmail className='text-xl dark:fill-gray-300  mx-3' />
                                <input
                                    type="email"
                                    {...formik.getFieldProps("email")}
                                    className={formikClasses("email")}
                                    placeholder='Enter your email'
                                />
                            </div>
                            {formik.errors.email && formik.touched.email && <div className='text-red-500 text-sm mt-1 '>{formik.errors.email}</div>}
                        </div>

                        <div className='mt-6'>
                            <label className='font-bold dark:text-gray-300 ms-1 block text-sm'>Phone</label>
                            <div className='flex bg-gray-100 dark:bg-gray-800 h-10 mt-2 w-full rounded-xl border-none items-center'>
                                <BsFillTelephoneFill className='text-xl dark:fill-gray-300  mx-3' />
                                <input
                                    type="text"
                                    {...formik.getFieldProps("phone")}
                                    className={formikClasses("phone")}
                                    placeholder='Phone number'
                                />
                            </div>
                            {formik.errors.email && formik.touched.phone && <div className='text-red-500 text-sm mt-1'>{formik.errors.phone}</div>}
                        </div>

                        <div className='mt-6'>
                            <label className='font-bold dark:text-gray-300 ms-1 block text-sm'>Message</label>
                            <div className=' mt-2 rounded-xl  border-none flex  bg-gray-100 dark:bg-gray-800'>
                                <TbMessageCircle2Filled className='text-2xl dark:text-gray-300  mt-3 mx-3' />
                                <textarea
                                    name="message"
                                    {...formik.getFieldProps("message")}
                                    placeholder='Writer message...'
                                    className='focus:outline-none dark:text-gray-300 rounded-xl focus:border-teal-700 focus:ring-1 focus:ring-teal-700 focus:rounded-xl h-28 py-3 ps-2 w-full  bg-gray-100 dark:bg-gray-800 px-3' id="" cols="30" rows="10">
                                </textarea>
                            </div>
                            <div className='text-red-500 text-sm mt-1'>{formik.touched.message && formik.errors.message}</div>
                        </div>

                        <button
                            type='submit'
                            className='bg-black dark:bg-gray-300 text-center text-white dark:text-gray-900 w-full mt-7 py-2 font-bold'>
                            Send
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </>
}

export default Contact