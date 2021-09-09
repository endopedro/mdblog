import React from 'react'
import { IoIosSad } from 'react-icons/io'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import SubFooter from '../components/SubFooter'

import { appApi } from '../services/api'

const Home = ({ posts }) => {
  return (
    <Layout blogName="Minimalister">
      <Hero className="mt-7 mb-10" />
      {!posts.length && (
        <h3 className="text-2xl flex justify-center items-center">
          No posts yet... <IoIosSad className="ml-4" />
        </h3>
      )}
      <div className="grid md:grid-cols-2 md:gap-10 mb-0 md:mb-10">
        {posts.map((post) => (
          <PostCard key={post._id} className="mb-10 md:mb-0" post={post} />
        ))}
      </div>
      <hr className="border-t border-woodsmoke-400 mb-8" />
      <SubFooter className="sm:mb-8" />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await appApi()
    .getPosts()
    .then(({ data }) => data.result)
    .catch((err) => [])

  return { props: { posts }, revalidate: 600 }
}

export default Home
