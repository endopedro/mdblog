import React from 'react'
import cx from 'classnames'

import Portlet, { PortletBody, PortletHeader } from './Portlet'
import PostCard from './PostCard'

const SubFooter = ({ className, posts, title }) => (
  <Portlet className={className}>
    <PortletHeader>
      <h3>{title}</h3>
    </PortletHeader>
    <PortletBody>
      <div className="md:grid md:grid-cols-2 md:gap-5">
        {posts.map((post, i) => (
          <PostCard
            key={post._id}
            className={cx({ 'mt-5 sm:mt-0': i != 0 })}
            post={post}
            sm
          />
        ))}
      </div>
    </PortletBody>
  </Portlet>
)

export default SubFooter
