import React, { useState } from 'react'
import { IoIosSad } from 'react-icons/io'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../domain/home/Posts'
import SubFooter from '../components/SubFooter'

import { appApi } from '../services/api'

const Home = ({ posts, totalPages, settings }) => {
  return (
    <Layout blogName={settings.name}>
      <Hero className="mt-7 mb-10" settings={settings} />
      {!posts.length && (
        <h3 className="text-2xl flex justify-center items-center">
          No posts yet... <IoIosSad className="ml-4" />
        </h3>
      )}
      <Posts initialPosts={posts} totalPages={totalPages} />
      {/* <hr className="border-t border-woodsmoke-400 mb-8" />
      <SubFooter className="sm:mb-8" posts={posts} /> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await Promise.all([
    appApi()
      .getPosts()
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
