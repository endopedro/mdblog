import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import '../styles/main.css'
import 'tailwindcss/tailwind.css'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
)

export default MyApp
