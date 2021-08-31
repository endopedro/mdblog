import React from 'react'

const FeaturedImage = () => {
  return (
    <div className="h-80 w-full relative mt-7">
      <img
        className="h-full w-full object-cover"
        src="https://picsum.photos/400"
        alt=""
      />
      <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
    </div>
  )
}

export default FeaturedImage
