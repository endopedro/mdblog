import React from 'react'

import Default from './Default'
import Medium from './Medium'
import Small from './Small'

const PostCard = ({ className, post, sm, md }) => {
  return (
    <div className={className}>
      {sm && <Small {...post} />}
      {md && <Medium {...post} />}
      {!md && !sm && <Default {...post} />}
    </div>
  )
}

export default PostCard
