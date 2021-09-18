import React from 'react'

import Default from './Default'
import Medium from './Medium'
import Small from './Small'
import Strip from './Strip'

const PostCard = ({ className, post, sm, md, strip }) => {
  if (sm) return <Small className={className} {...post} />
  if (md) return <Medium className={className} {...post} />
  if (strip) return <Strip className={className} {...post} />
  return <Default className={className} {...post} />
}

export default PostCard
