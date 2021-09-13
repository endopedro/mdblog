import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import InfiniteScroll from 'react-infinite-scroller'
import ReactLoading from 'react-loading'

import PostCard from '../../components/PostCard'
import { appApi } from '../../services/api'

const Posts = ({ initialPosts, totalPages }) => {
  const [posts, setPosts] = useState(initialPosts)
  const [hasMore, setHasMore] = useState(true)

  const fetchPosts = async (page) => {
    if (hasMore) {
      await appApi()
        .getPosts(page)
        .then(({ data }) => {
          setPosts((prevState) => [...prevState, ...data.result])
          console.log('data.results', data.result)
          if (page == data.pages) setHasMore(false)
        })
        .catch((err) => [])
    }
  }

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={async (page) => {
        if (page <= totalPages) await fetchPosts(page)
      }}
      hasMore={hasMore}
      loader={
        <ReactLoading
          type="spin"
          color="#29d"
          height={30}
          width={30}
          className="mx-auto mb-8"
        />
      }
    >
      <div className="grid md:grid-cols-2 md:gap-10">
        {isMobile ? (
          <>
            {posts.map((post) => (
              <div>
                <PostCard key={post._id} post={post} className="mb-10" />
              </div>
            ))}
          </>
        ) : (
          <>
            <div>
              {posts.map((post, i) => {
                if (i % 2 == 0)
                  return (
                    <PostCard key={post._id} className="mb-10" post={post} />
                  )
              })}
            </div>
            <div>
              {posts.map((post, i) => {
                if (i % 2 != 0)
                  return (
                    <PostCard key={post._id} className="mb-10" post={post} />
                  )
              })}
            </div>
          </>
        )}
      </div>
    </InfiniteScroll>
  )
}

export default Posts
