"use client"
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs"
import { useEffect, useState } from "react"



const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
    }, [darkMode])
    // useEffect(() => {
    //     const theme = localStorage.getItem("theme")
    //     if (theme === "dark") setDarkMode(true)

    // }, [])

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem("theme", "dark")
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //         localStorage.setItem("theme", "light")
    //     }
    // }, [darkMode])


    return <>

        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={() => setDarkMode(!darkMode)} />
            <div className="relative w-11 h-6 bg-gray-900  rounded-full peer dark:bg-gray-white  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:bg-black peer-checked:bg-gray-100">
                <BsFillMoonStarsFill className="mt-[6px] ml-[26px] hidden dark:block text-[12px]  absolute text-yellow-500 z-20" />
                <BsSunFill className="absolute ml-[6px]  dark:hidden z-20 text-yellow-500 mt-[6px] text-[12px]" />
            </div>
        </label>







    </>
}

export default ThemeToggle