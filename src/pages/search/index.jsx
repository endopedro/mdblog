import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'

import Layout from '../../components/Layout'
import Portlet, { PortletHeader, PortletBody } from '../../components/Portlet'

import Posts from '../../components/Posts'
import PostCard from '../../components/PostCard'
import { appApi } from '../../services/api'

const Search = ({ settings }) => {
  const router = useRouter()
  const { search } = router.query
  const [searchPosts, setSearchPosts] = useState(null)

  const fetchPosts = () =>
    appApi()
      .getPosts({ search: search })
      .then(({ data }) => setSearchPosts(data))
      .catch((err) => null)

  useEffect(() => {
    if (search !== null) fetchPosts()
  }, [search])

  return (
    <Layout settings={settings} page="Search">
      <Portlet className="my-7">
        <PortletHeader>
          <h5>
            Searching for: <span>"{search}"</span>
          </h5>
        </PortletHeader>
        <PortletBody className="py-3">
          {searchPosts?.result.length < 1 && (
            <h3 className="text-center text-2xl bold">Nothing found</h3>
          )}
          {searchPosts && (
            <Posts
              initialPosts={searchPosts.result}
              totalPages={searchPosts.pages}
              search={search}
            >
              {(posts) =>
                posts.map((post, i) => (
                  <PostCard
                    strip
                    post={post}
                    className={cx({ 'mt-4': i !== 0 })}
                  />
                ))
              }
            </Posts>
          )}
        </PortletBody>
      </Portlet>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const settings = await appApi()
    .getSettings()
    .then(({ data }) => data.result)
    .catch((err) => null)

  return { props: { settings: settings } }
}

export default Search
