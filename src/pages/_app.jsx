import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../styles/main.css'
import 'tailwindcss/tailwind.css'
import 'nprogress/nprogress.css'

export default function App(props) {
  const { Component, pageProps } = props

  NProgress.configure({ showSpinner: false })
  Router.events.on('routeChangeStart', (url) => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return <Component {...pageProps} />
}
