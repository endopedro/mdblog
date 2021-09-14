import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BiPurchaseTag } from 'react-icons/bi'
import Image from 'next/image'

import formatDate from '../../utils/formatDate'
import mdComponents from '../../utils/mdComponents'

const Content = ({ createdAt, author, category, title, tags, content }) => {
  return (
    <div className="bg-woodsmoke-500 px-4 py-7 md:p-7 mb-10">
      <div className="flex mb-3">
        <p className="text-xs text-gray-500 mr-4">
          on <b>{formatDate(createdAt)}</b>
        </p>
        <p className="text-xs text-gray-500 hidden sm:block mr-4">
          by <b>{author.name}</b>
        </p>
        <p className="text-xs text-gray-500">
          in <b>{category.label}</b>
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h1>

      <ReactMarkdown components={mdComponents}>{content}</ReactMarkdown>

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
          <h5 className="uppercase">{author.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Content
