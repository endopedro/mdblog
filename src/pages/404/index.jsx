import React, { useState, useEffect } from 'react'

import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import SubFooter from '../../components/SubFooter'
import { appApi } from '../../services/api'

const Page404 = ({ settings }) => {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(
    () =>
      appApi()
        .getPosts({ latest: true })
        .then(({ data }) => setLatestPosts(data.result))
        .catch((err) => null),
    []
  )

  return (
    <Layout settings={settings} page="404">
      <Hero
        cover="https://res.cloudinary.com/endopedro/image/upload/v1632449266/404_phuxvl.webp"
        title="Oops!"
        subtitle="This link is unavailable."
        className="my-5 md:my-7"
      />
      {latestPosts && (
        <SubFooter
          title="LATEST POSTS"
          posts={latestPosts}
          className="mt-5 md:mt-7"
        />
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const settings = await appApi()
    .getSettings()
    .then(({ data }) => data.result)
    .catch((err) => null)

  return { props: { settings: settings } }
}

export default Page404
