import React from 'react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PostCard from '../components/PostCard'
import SubFooter from '../components/SubFooter'

const Home = () => {
  return (
    <Layout blogName="Minimalister">
      <Hero className="mt-7 mb-10" />
      <div className="grid md:grid-cols-2 md:gap-10 mb-0 md:mb-10">
        {[1, 2, 3].map((item) => (
          <PostCard className="mb-10 md:mb-0" />
        ))}
      </div>
      <hr className="border-t border-woodsmoke-400 mb-8" />
      <SubFooter className="sm:mb-8" />
    </Layout>
  )
}

export default Home
