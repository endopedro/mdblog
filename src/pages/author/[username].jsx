import React from 'react'
import Image from 'next/image'

import Layout from '../../components/Layout'
import SubFooter from '../../components/SubFooter'
import Posts from '../../components/Posts'
import PostCard from '../../components/PostCard'
import { appApi } from '../../services/api'

const authorPage = ({ settings, author, posts, totalPages }) => {
  return (
    <Layout settings={settings}>
      <div className="mt-7 px-5 md:p-0">
        <div className="mb-7">
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
        </div>
        <h3 className="bg-woodsmoke-500 p-4 font-bold text-md mb-7">
          POSTS BY <span className="uppercase">{author.name}</span>
        </h3>
        <Posts
          initialPosts={posts}
          totalPages={totalPages}
          author={author.username}
          className="mb-10"
        >
          {(posts) =>
            posts.map((post) => <PostCard strip post={post} className="mb-4" />)
          }
        </Posts>
      </div>
    </Layout>
  )
}

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
