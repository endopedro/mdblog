import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MdContent from '../components/MdContent'
import { appApi } from '../services/api'

const about = ({ page, settings, author }) => (
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

          <div className="flex justify-center flex-col">
            <h4 className="text-sm font-bold">This blog is sustained by</h4>
            <Link href={`/author/${author.username}`} passHref>
              <a>
                <h5 className="uppercase hover:text-blue-400 transition duration-300">
                  {author.name}
                </h5>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export async function getStaticProps() {
  const data = await Promise.all([
    appApi()
      .getPage('about')
      .then(({ data }) => data.result)
      .catch((err) => null),
    appApi()
      .getSettings()
      .then(({ data }) => data.result)
      .catch((err) => null),
    appApi()
      .getMainUser()
      .then(({ data }) => data.result)
      .catch((err) => null),
  ]).then((values) => values)

  if (!data[0]) return { notFound: true }

  return {
    props: {
      page: data[0],
      settings: data[1],
      author: data[2],
    },
  }
}

export default about
