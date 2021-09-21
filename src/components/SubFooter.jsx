import React from 'react'

import Portlet, { PortletBody, PortletHeader } from './Portlet'
import PostCard from './PostCard'

const SubFooter = ({ className, posts, title }) => (
  <Portlet className={className}>
    <PortletHeader>
      <h3>{title}</h3>
    </PortletHeader>
    <PortletBody>
      <div className="grid md:grid-cols-2 md:gap-10">
        {posts.map((post) => (
          <PostCard key={post._id} sm className="mb-10 md:mb-0" post={post} />
        ))}
      </div>
    </PortletBody>
  </Portlet>
)

export default SubFooter
