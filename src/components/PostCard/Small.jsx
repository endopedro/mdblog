import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import formatDate from '../../utils/formatDate'

const SmallPostCard = ({ cover, slug, author, title, createdAt }) => {
  return (
    <div className="flex mx-3 sm:mx-0">
      <Link href={`/post/${slug}`}>
        <div className="h-24 w-1/3 flex-shrink-0 relative mr-3 cursor-pointer">
          <Image src={cover.secure_url} layout="fill" objectFit="cover" />
          <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
        </div>
      </Link>
      <div className="h-24 w-full flex flex-col justify-center">
        <Link href={`/post/${slug}`}>
          <a className="cursor-pointer hover:underline">
            <h3 className="text-md font-bold mb-3">{title}</h3>
          </a>
        </Link>
        <h5 className="text-xs text-gray-500">
          <span className="font-bold">by </span>
          <span className="uppercase">{author.name}</span>
        </h5>
        <p className="text-xs font-semibold text-gray-500">
          {formatDate(createdAt)}
        </p>
      </div>
    </div>
  )
}

export default SmallPostCard
