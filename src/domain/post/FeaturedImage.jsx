import React from 'react'
import Image from 'next/image'

const FeaturedImage = ({ cover }) => {
  return (
    <div className="h-80 w-full relative">
      <Image src={cover.secure_url} layout="fill" objectFit="cover" />
      <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
    </div>
  )
}

export default FeaturedImage
