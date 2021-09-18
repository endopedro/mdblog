import React from 'react'
import { IoIosSad } from 'react-icons/io'
import { isMobile } from 'react-device-detect'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import PostCard from '../components/PostCard'
import SubFooter from '../components/SubFooter'

import { appApi } from '../services/api'

const Home = ({ posts, totalPages, settings }) => {
  const PostPicker = ({ even, odd }) => (
    <div>
      {posts.map((post, i) => {
        if ((even && i % 2 == 0) || (odd && i % 2 != 0))
          return <PostCard key={post._id} className="mb-10" post={post} />
      })}
    </div>
  )

  return (
    <Layout settings={settings}>
      <Hero
        className="mt-7 mb-10"
        cover={settings.cover.secure_url}
        title={`Welcome to ${settings.name}!`}
        subtitle={settings.title}
      />
      {!posts.length && (
        <h3 className="text-2xl flex justify-center items-center">
          No posts yet... <IoIosSad className="ml-4" />
        </h3>
      )}
      <Posts initialPosts={posts} totalPages={totalPages}>
        {({ posts }) => (
          <div className="grid md:grid-cols-2 md:gap-10">
            {isMobile ? (
              <>
                {posts.map((post) => (
                  <div key={post._id}>
                    <PostCard post={post} className="mb-10" />
                  </div>
                ))}
              </>
            ) : (
              <>
                <PostPicker even />
                <PostPicker odd />
              </>
            )}
          </div>
        )}
      </Posts>
      {/* <hr className="border-t border-woodsmoke-400 mb-8" />
      <SubFooter className="sm:mb-8" posts={posts} /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await Promise.all([
    appApi()
      .getPosts({})
      .then(({ data }) => data)
      .catch((err) => []),
    appApi()
      .getSettings()
      .then(({ data }) => data.result)
      .catch((err) => null),
  ]).then((values) => values)

  return {
    props: {
      posts: data[0].result,
      totalPages: data[0].pages,
      settings: data[1],
    },
    revalidate: 600,
  }
}

export default Home
