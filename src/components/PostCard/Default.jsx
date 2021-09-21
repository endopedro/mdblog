import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

import PortLet, { PortletBody, PortletFooter } from '../Portlet'

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
    <PortLet className={className}>
      <Link href={`/post/${slug}`} passHref>
        <a>
          <div className="h-40 w-full relative cursor-pointer">
            <Image src={cover.secure_url} layout="fill" objectFit="cover" />
            <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
          </div>
        </a>
      </Link>

      <div>
        <PortletBody>
          <Link href={`/post/${slug}`}>
            <a className="cursor-pointer hover:text-blue-400 transition duration-300">
              <h2 className="text-xl font-bold mb-3 ">{title}</h2>
              {excerpt && <p className="text-sm leading-relaxed">{excerpt}</p>}
            </a>
          </Link>
        </PortletBody>

        <PortletFooter className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={author.picture.secure_url}
              height={40}
              width={40}
              objectFit="cover"
              className="rounded-full"
            />
            <Link href={`/author/${author.username}`} passHref>
              <a>
                <h5 className="uppercase text-xs text-gray-500 ml-2 hover:text-blue-400 transition duration-300">
                  {author.name}
                </h5>
              </a>
            </Link>
          </div>
          <p className="uppercase text-xs font-semibold text-gray-500">
            {formatDate(createdAt)}
          </p>
        </PortletFooter>
      </div>
    </PortLet>
  )
}

export default DefaultPostCard
