import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BiPurchaseTag } from 'react-icons/bi'

import mdComponents from '../../utils/mdComponents'

const Content = ({ content }) => {
  const markdown = `[Pica Pau Rachador](https://www.youtube.com/watch?v=M1MnwG8iot8)`

  return (
    <div className="bg-woodsmoke-500 px-4 py-7 md:p-7 mb-10">
      <div className="flex mb-3">
        <p className="text-xs text-gray-500 mr-4">
          on <b>OCTOBER 5, 2018</b>
        </p>
        <p className="text-xs text-gray-500 hidden sm:block mr-4">
          by <b>ALEXEY TROFIMOV</b>
        </p>
        <p className="text-xs text-gray-500">
          in <b>IMAGE</b>
        </p>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        Image post format with pagination
      </h1>

      <ReactMarkdown components={mdComponents}>{content}</ReactMarkdown>

      <hr className="border-woodsmoke-200 my-5" />

      <div className="flex items-center mb-5">
        <BiPurchaseTag className="mr-3 mb-2" />
        <span className="mr-2 mb-2 px-3 py-1 bg-woodsmoke-600 border border-woodsmoke-300 rounded-full">
          minimalism
        </span>
        <span className="mr-2 mb-2 px-3 py-1 bg-woodsmoke-600 border border-woodsmoke-300 rounded-full">
          cars
        </span>
      </div>
      <div className="flex items-center">
        <img
          className="rounded-full h-16 w-16 md:h-20 md:w-20 border border-woodsmoke-50 object-cover mr-2"
          src="https://picsum.photos/100"
          alt=""
        />
        <div className="flex justify-center flex-col">
          <h4 className="text-sm font-bold">written by</h4>
          <h5 className="uppercase">ALEXEY TROFIMOV</h5>
        </div>
      </div>
    </div>
  )
}

export default Content
