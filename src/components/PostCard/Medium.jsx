import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

const MediumPostCard = ({ cover, slug, author, title, className }) => (
  <div
    className={cx('h-52 w-full relative rounded-lg overflow-hidden', className)}
  >
    <Image src={cover.secure_url} layout="fill" objectFit="cover" />
    <div className="absolute h-full w-full top-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
      <div className="bg-woodsmoke-500 p-4 shadow absolute bottom-5">
        <Link href={`/post/${slug}`}>
          <a className="cursor-pointer hover:text-blue-400 transition duration-300">
            <h3 className=" font-bold text-md mb-3">{title}</h3>
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
      </div>
    </div>
  </div>
)

export default MediumPostCard
