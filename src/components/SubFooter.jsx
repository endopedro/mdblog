import React from 'react'

import PostCard from './PostCard'

const SubFooter = ({ className }) => {
  return (
    <div className={className}>
      <h3 className="bg-woodsmoke-500 p-4 font-bold text-md mb-7">
        FEATURED POSTS
      </h3>
      <div className="grid md:grid-cols-2 md:gap-10">
        {[1, 2].map((item) => (
          <PostCard key={item} md className="mb-10 md:mb-0" />
        ))}
        {[1, 2].map((item) => (
          <PostCard key={item} sm className="mb-10 md:mb-0" />
        ))}
      </div>
    </div>
  )
}

export default SubFooter
