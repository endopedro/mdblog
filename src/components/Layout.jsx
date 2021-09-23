import React from 'react'
import Head from 'next/head'
import cx from 'classnames'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children, page, settings }) => {
  return (
    <>
      <Head>
        <title>
          {cx(
            page?.replace(/\w\S*/g, (w) =>
              w.replace(/^\w/, (c) => c.toUpperCase())
            ),
            { '|': !!page },
            settings.name
          )}
        </title>
      </Head>
      <main className="relative">
        <Navbar page={page} settings={settings} />
        <div className="container mx-auto px-2 lg:px-8 max-w-4xl pt-14 sm:pt-16 mb-5 sm:mb-7">
          {children}
        </div>
      </main>
      <Footer blogName={settings.name} />
    </>
  )
}

export default Layout
