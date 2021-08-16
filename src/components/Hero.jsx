import React from 'react'
import cx from 'classnames'

const Hero = ({ className }) => {
  return (
    <div
      className={cx(
        className,
        'h-64 bg-white relative flex items-end rounded-sm overflow-hidden'
      )}
    >
      <img
        className="object-cover h-full w-full absolute"
        src="https://picsum.photos/800/500"
      />
      <div className="relative w-full h-full p-5 flex justify-end flex-col">
        <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max rounded-sm mb-2">
          <p className="text-lg md:text-3xl font-bold ">
            Wellcome to MINIMALISTER!
          </p>
        </div>
        <div className="bg-woodsmoke-500 py-5 px-7 shadow rounded-sm md:w-max">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            ipsum odio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
