import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import ReactLoading from 'react-loading'

import { appApi } from '../services/api'

const Posts = ({
  children,
  initialPosts,
  totalPages,
  author,
  search,
  category,
  className,
}) => {
  const [posts, setPosts] = useState(initialPosts)
  const [hasMore, setHasMore] = useState(true)

  const fetchPosts = async (page) => {
    if (hasMore) {
      await appApi()
        .getPosts({
          page: page,
          ...(author && { author: author }),
          ...(search && { search: search }),
          ...(category && { category: category }),
        })
        .then(({ data }) => {
          setPosts((prevState) => [...prevState, ...data.result])
          if (page == data.pages) setHasMore(false)
        })
        .catch((err) => [])
    }
  }

  return (
    <InfiniteScroll
      className={className}
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
          key="loader"
        />
      }
    >
      {children(posts)}
    </InfiniteScroll>
  )
}

export default Posts
