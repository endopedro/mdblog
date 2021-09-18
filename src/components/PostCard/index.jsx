import React from 'react'

import Default from './Default'
import Medium from './Medium'
import Small from './Small'

const PostCard = ({ className, post, sm, md }) => {
  if (sm) return <Small className={className} {...post} />
  if (md) return <Medium className={className} {...post} />
  return <Default className={className} {...post} />
}

export default PostCard
