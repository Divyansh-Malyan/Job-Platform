import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <Navbar isHome/>
    <Outlet/>
    </>
  )
}

export default HomeLayout
