import React from 'react'
import Image from 'next/image'

import Layout from '../../components/Layout'
import Portlet, { PortletBody, PortletHeader } from '../../components/Portlet'
import Posts from '../../components/Posts'
import PostCard from '../../components/PostCard'
import { appApi } from '../../services/api'

const authorPage = ({ settings, author, posts, totalPages }) => (
  <Layout settings={settings}>
    <Portlet bg className="my-7">
      <PortletBody>
        <div className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-4">
          <Image
            src={author.picture.secure_url}
            height={128}
            width={128}
            objectFit="cover"
            className="rounded-full border border-woodsmoke-50"
          />
        </div>
        <h2 className="text-3xl text-center bold mb-4">{author.name}</h2>
        <p className="text-justify">{author.bio}</p>
      </PortletBody>
    </Portlet>

    <Portlet className="mb-7">
      <PortletHeader>
        <span className="uppercase">POSTS BY {author.name}</span>
      </PortletHeader>
      <PortletBody className="pb-2">
        <Posts
          initialPosts={posts}
          totalPages={totalPages}
          author={author.username}
        >
          {(posts) =>
            posts.map((post) => <PostCard strip post={post} className="mb-4" />)
          }
        </Posts>
      </PortletBody>
    </Portlet>
  </Layout>
)

export async function getStaticProps(context) {
  const data = await Promise.all([
    appApi()
      .getAuthor(context.params.username)
      .then(({ data }) => data.result)
      .catch(() => null),
    appApi()
      .getSettings()
      .then(({ data }) => data.result)
      .catch((err) => null),
    appApi()
      .getPosts({ author: context.params.username })
      .then(({ data }) => data)
      .catch((err) => []),
  ]).then((values) => values)

  if (!data[0]) return { notFound: true }

  return {
    props: {
      author: data[0],
      settings: data[1],
      posts: data[2].result,
      totalPages: data[2].pages,
    },
  }
}

export async function getStaticPaths() {
  const authors = await appApi()
    .getAuthors()
    .then(({ data }) => data.result)
    .catch((err) => [])

  const paths = authors.map((author) => ({
    params: { username: author.username },
  }))

  return { paths, fallback: 'blocking' }
}

export default authorPage
