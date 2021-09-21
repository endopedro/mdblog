import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

import formatDate from '../../utils/formatDate'
import MdContent from '../../components/MdContent'

const Content = ({ createdAt, author, category, title, tags, content }) => (
  <>
    <div className="flex mb-3">
      <p className="text-xs text-gray-500 mr-4">
        on <b>{formatDate(createdAt)}</b>
      </p>
      <p className="text-xs text-gray-500 hidden sm:block mr-4">
        by
        <Link href={`/author/${author.username}`} passHref>
          <a>
            <b className="ml-1 hover:text-blue-400 transition duration-300">
              {author.name}
            </b>
          </a>
        </Link>
      </p>
      <p className="text-xs text-gray-500">
        in <b>{category.label}</b>
      </p>
    </div>

    <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>

    <hr className="border-woodsmoke-300 my-5" />

    <MdContent children={content} />

    <hr className="border-woodsmoke-200 my-5" />

    {tags && (
      <div className="flex items-center mb-5">
        <BiPurchaseTag className="mr-3 mb-2" />
        {tags.map((tag) => (
          <span
            key={tag}
            className="mr-2 mb-2 px-3 py-1 bg-woodsmoke-600 border border-woodsmoke-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
    <div className="flex items-center">
      <div className="h-16 w-16 md:h-20 md:w-20 mr-2">
        <Image
          src={author.picture.secure_url}
          height={80}
          width={80}
          objectFit="cover"
          className="rounded-full border border-woodsmoke-50"
        />
      </div>

      <div className="flex justify-center flex-col">
        <h4 className="text-sm font-bold">written by</h4>
        <Link href={`/author/${author.username}`} passHref>
          <a>
            <h5 className="uppercase hover:text-blue-400 transition duration-300">
              {author.name}
            </h5>
          </a>
        </Link>
      </div>
    </div>
  </>
)

export default Content
