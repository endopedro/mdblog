import React from 'react'
import Image from 'next/image'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Portlet, { PortletBody } from '../components/Portlet'
import MdContent from '../components/MdContent'
import { appApi } from '../services/api'

const about = ({ page, settings }) => (
  <Layout settings={settings} page={page.slug}>
    <Hero cover={page.cover.secure_url} title={page.title} className="my-7" />
    <Portlet className="mb-7">
      <PortletBody className="pb-1 pt-5">
        <MdContent children={page.content} />
      </PortletBody>
    </Portlet>
  </Layout>
)

export async function getStaticProps(context) {
  const data = await Promise.all([
    appApi()
      .getPage(context.params.slug)
      .then(({ data }) => data.result)
      .catch((err) => null),
    appApi()
      .getSettings()
      .then(({ data }) => data.result)
      .catch((err) => null),
  ]).then((values) => values)

  if (!data[0]) return { notFound: true }

  return {
    props: {
      page: data[0],
      settings: data[1],
    },
  }
}

export async function getStaticPaths() {
  const pages = await appApi()
    .getPages()
    .then(({ data }) => data.result)
    .catch((err) => [])

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export default about
