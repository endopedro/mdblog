import React from 'react'

import Default from './Default'
import Medium from './Medium'
import Small from './Small'

const PostCard = ({ className, sm, md }) => {
  return (
    <div className={className}>
      {sm && <Small />}
      {md && <Medium />}
      {!md && !sm && <Default />}
    </div>
  )
}

export default PostCard
