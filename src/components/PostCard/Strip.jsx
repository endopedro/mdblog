import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

import formatDate from '../../utils/formatDate'

const Strip = ({ cover, slug, title, createdAt, className }) => (
  <div className={cx('flex', className)}>
    <Link href={`/post/${slug}`}>
      <div className="h-24 w-1/3 flex-shrink-0 relative mr-3 cursor-pointer">
        <Image
          src={cover.secure_url}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
      </div>
    </Link>
    <div className="w-full flex flex-col justify-start">
      <p className="text-xs font-semibold text-gray-500 mb-3">
        {formatDate(createdAt)}
      </p>
      <Link href={`/post/${slug}`}>
        <a className="cursor-pointer hover:text-blue-400 transition duration-300">
          <h3 className="text-lg leading-none md:text-2xl font-bold">
            {title}
          </h3>
        </a>
      </Link>
    </div>
  </div>
)

export default Strip
