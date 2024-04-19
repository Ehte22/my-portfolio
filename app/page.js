"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import reduxStore from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const page = () => {
  return <Provider store={reduxStore}>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Provider>
}

export default page