import React from 'react'
import Head from 'next/head'

const Layout = ({ children, page, blogName }) => {
  return (
    <>
      <Head>
        <title>{blogName}</title>
      </Head>
      <main>
        <div className="container mx-auto px-2 lg:px-8 max-w-4xl">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
