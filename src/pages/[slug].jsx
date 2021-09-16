import React from 'react'
import Image from 'next/image'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MdContent from '../components/MdContent'
import { appApi } from '../services/api'

const about = ({ page, settings }) => (
  <Layout settings={settings} page={page.slug}>
    <Hero cover={page.cover.secure_url} title={page.title} className="my-7" />
    <div className="mb-10 px-5 md:p-0">
      <div className="mb-7">
        <MdContent children={page.content} />
      </div>
      <div className="border border-woodsmoke-400 p-7 md:p-7">
        <div className="flex items-center">
          <div className="h-16 w-16 md:h-20 md:w-20 mr-2">
            <Image
              src={author.picture.secure_url}
              height={80}
              width={80}
              objectFit="cover"
              className="border border-woodsmoke-50"
            />
          </div>
        </div>
      </div>
    </div>
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
