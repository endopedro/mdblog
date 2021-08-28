import React from 'react'

const MediumPostCard = () => {
  return (
    <>
      <div className="h-52 w-full relative">
        <img
          className="h-full w-full object-cover"
          src="https://picsum.photos/400"
          alt=""
        />
        <div className="absolute h-full w-full top-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <div className="bg-woodsmoke-500 p-4 shadow absolute bottom-5">
            <h3 className=" font-bold text-md mb-3">Standard post format</h3>
            <h5 className="text-xs text-gray-500">
              <span className="font-bold">by </span>
              <span className="uppercase">ALEXEY TROFIMOV</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default MediumPostCard
