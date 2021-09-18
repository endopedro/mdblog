import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import formatDate from '../../utils/formatDate'

const DefaultPostCard = ({
  cover,
  createdAt,
  title,
  author,
  excerpt,
  slug,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/post/${slug}`}>
        <div className="h-40 w-full relative cursor-pointer">
          <Image src={cover.secure_url} layout="fill" objectFit="cover" />
          <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
        </div>
      </Link>
      <div className="bg-woodsmoke-500 py-5 px-7 shadow">
        <p className="uppercase text-xs font-semibold text-gray-500 mb-3">
          {formatDate(createdAt)}
        </p>
        <Link href={`/post/${slug}`}>
          <a className="cursor-pointer hover:underline">
            <h2 className="text-xl font-bold mb-3 ">{title}</h2>
            {excerpt && (
              <p className="text-sm leading-relaxed mb-5">{excerpt}</p>
            )}
          </a>
        </Link>
        <div className="flex items-center">
          <Image
            src={author.picture.secure_url}
            height={40}
            width={40}
            objectFit="cover"
            className="rounded-full"
          />
          <h5 className="uppercase text-xs text-gray-500 ml-2">
            {author.name}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default DefaultPostCard
