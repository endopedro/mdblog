import React, { useState, useEffect } from 'react'

import Layout from '../../components/Layout'
import SubFooter from '../../components/SubFooter'
import FeaturedImage from '../../domain/post/FeaturedImage'
import Content from '../../domain/post/Content'

import { appApi } from '../../services/api'

const Post = ({ post, settings }) => {
  const [related, setRelated] = useState(null)
  useEffect(
    () =>
      appApi()
        .getRelatedPosts(post._id)
        .then(({ data }) => setRelated(data.result)),
    [post]
  )

  return (
    <Layout settings={settings}>
      <div>
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
  const data = await Promise.all([
    appApi()
      .getPost(context.params.slug)
      .then(({ data }) => data.result)
      .catch(() => null),
    appApi()
      .getSettings()
      .then(({ data }) => data.result)
      .catch((err) => null),
  ]).then((values) => values)

  const post = data[0]
  const settings = data[1]

  if (!post) return { notFound: true }

  return { props: { post: post, settings: settings } }
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
