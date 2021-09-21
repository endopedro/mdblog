import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

import formatDate from '../../utils/formatDate'

const SmallPostCard = ({
  cover,
  slug,
  author,
  title,
  createdAt,
  className,
}) => (
  <div className={cx('flex mx-3 sm:mx-0', className)}>
    <Link href={`/post/${slug}`} passHref>
      <a className="h-24 w-1/3 flex-shrink-0 relative mr-3 cursor-pointer">
        <Image
          src={cover.secure_url}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
      </a>
    </Link>
    <div className="h-24 w-full flex flex-col justify-center">
      <Link href={`/post/${slug}`}>
        <a className="cursor-pointer hover:text-blue-400 transition duration-300">
          <h3 className="text-md font-bold mb-3">{title}</h3>
        </a>
      </Link>
      <h5 className="text-xs text-gray-500">
        <span className="font-bold">by </span>
        <Link href={`/author/${author.username}`} passHref>
          <a>
            <span className="uppercase hover:text-blue-400 transition duration-300">
              {author.name}
            </span>
          </a>
        </Link>
      </h5>
      <p className="text-xs font-semibold text-gray-500">
        {formatDate(createdAt)}
      </p>
    </div>
  </div>
)

export default SmallPostCard
