import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Portlet, { PortletBody } from '../components/Portlet'
import MdContent from '../components/MdContent'
import SubFooter from '../components/SubFooter'
import { appApi } from '../services/api'

const about = ({ page, settings, author }) => {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(
    () =>
      appApi()
        .getPosts({ latest: true })
        .then(({ data }) => setLatestPosts(data.result))
        .catch((err) => null),
    []
  )

  return (
    <Layout settings={settings} page={page.slug}>
      <Hero cover={page.cover.secure_url} title={page.title} className="my-7" />
      <Portlet>
        <PortletBody className="pb-1 pt-5">
          <MdContent children={page.content} />
        </PortletBody>
      </Portlet>
      {page.slug == 'about' && (
        <Portlet className="mt-5 md:mt-7">
          <div className="flex items-center">
            <div className="h-16 w-16 md:h-20 md:w-20 mr-5">
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
        </Portlet>
      )}
      {latestPosts && (
        <SubFooter
          title="LATEST POSTS"
          posts={latestPosts}
          className="mt-5 md:mt-7"
        />
      )}
    </Layout>
  )
}

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
