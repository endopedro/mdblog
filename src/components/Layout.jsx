import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, page, blogName }) => {
  return (
    <>
      <Head>
        <title>{blogName}</title>
      </Head>
      <main>
        <Navbar page={page} blogName={blogName} />
        <div className="container mx-auto md:px-2 lg:px-8 max-w-4xl">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
