import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Navbar from '../../Component/Navbar/Nabar';

const Main = () => {
    return (
        <>
            <Header />
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Main