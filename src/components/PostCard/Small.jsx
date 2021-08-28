import React from 'react'

const SmallPostCard = () => {
  return (
    <>
      <div className="flex mx-3 sm:mx-0">
        <div className="h-24 w-1/3 flex-shrink-0 relative mr-3">
          <img
            className="h-full w-full object-cover"
            src="https://picsum.photos/400"
            alt=""
          />
          <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
        </div>
        <div className="h-24 w-full flex flex-col justify-center">
          <h3 className="text-md font-bold mb-3">Standard post format</h3>
          <h5 className="text-xs text-gray-500">
            <span className="font-bold">by </span>
            <span className="uppercase">ALEXEY TROFIMOV</span>
          </h5>
          <p className="text-xs font-semibold text-gray-500">october 2018</p>
        </div>
      </div>
    </>
  )
}

export default SmallPostCard
