import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import SubFooter from '../../components/SubFooter'
import FeaturedImage from '../../domain/post/FeaturedImage'
import Content from '../../domain/post/Content'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  console.log(slug)
  return (
    <Layout blogName="Minimalister">
      <div className="px-3 sm:px-0">
        <FeaturedImage />
        <Content />
      </div>
      <SubFooter className="sm:mb-8" />
    </Layout>
  )
}

export default Post
