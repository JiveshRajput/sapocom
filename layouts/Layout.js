import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos'

function Layout({ children }) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
