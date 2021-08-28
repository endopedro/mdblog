import React from 'react'

import PostCard from './PostCard'

const SubFooter = ({ className }) => {
  return (
    <div className={className}>
      <h3 className="bg-woodsmoke-500 p-4 font-bold text-md mb-7">
        FEATURED POSTS
      </h3>
      <div className="grid md:grid-cols-2 md:gap-10">
        {[1, 2, 3, 4].map((item) => (
          <PostCard sm className="mb-10 md:mb-0" />
        ))}
      </div>
    </div>
  )
}

export default SubFooter
