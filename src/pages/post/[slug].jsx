import React, { useState, useEffect } from 'react'

import Layout from '../../components/Layout'
import SubFooter from '../../components/SubFooter'
import FeaturedImage from '../../domain/post/FeaturedImage'
import Content from '../../domain/post/Content'

import { appApi } from '../../services/api'

const Post = ({ post }) => {
  const [related, setRelated] = useState(null)
  useEffect(
    () =>
      appApi()
        .getRelated(post._id)
        .then(({ data }) => setRelated(data.result)),
    []
  )

  return (
    <Layout blogName="Minimalister">
      <div className="px-3 sm:px-0">
        <FeaturedImage {...post} />
        <Content {...post} />
      </div>
      {related && (
        <SubFooter className="sm:mb-8" title="RELATED POSTS" posts={related} />
      )}
    </Layout>
  )
}

export async function getStaticProps(context) {
  const post = await appApi()
    .getPost(context.params.slug)
    .then(({ data }) => data.result)
    .catch(() => null)

  if (!post) return { notFound: true }

  return { props: { post } }
}

export async function getStaticPaths() {
  const posts = await appApi()
    .getPosts()
    .then(({ data }) => data.result)
    .catch((err) => [])

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: 'blocking' }
}

export default Post
