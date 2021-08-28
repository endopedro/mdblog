import React from 'react'

const PostCard = ({ className, sm }) => {
  if (sm)
    return (
      <div className={className}>
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
      </div>
    )

  return (
    <div className={className}>
      <div className="h-40 w-full relative">
        <img
          className="h-full w-full object-cover"
          src="https://picsum.photos/400"
          alt=""
        />
        <div className="absolute h-full w-full top-0 bg-black opacity-0 hover:opacity-50 transition duration-300 ease-in-out" />
      </div>
      <div className="bg-woodsmoke-500 py-5 px-7 shadow">
        <p className="uppercase text-xs font-semibold text-gray-500 mb-3">
          October 31, 2018
        </p>
        <h2 className="text-xl font-bold mb-3">Standard post format</h2>
        <p className="text-sm leading-relaxed mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus…. Read more
        </p>
        <div className="flex items-center">
          <img
            className="rounded-full h-10 w-10 object-cover mr-2"
            src="https://picsum.photos/100"
            alt=""
          />
          <h5 className="uppercase text-xs text-gray-500">ALEXEY TROFIMOV</h5>
        </div>
      </div>
    </div>
  )
}

export default PostCard
