import React from 'react'

import PostCard from './PostCard'

const SubFooter = ({ className, posts, title }) => {
  return (
    <div className={className}>
      <h3 className="bg-woodsmoke-500 p-4 font-bold text-md mb-7">{title}</h3>
      <div className="grid md:grid-cols-2 md:gap-10">
        {posts.map((post) => (
          <PostCard key={post._id} sm className="mb-10 md:mb-0" post={post} />
        ))}
      </div>
    </div>
  )
}

export default SubFooter
