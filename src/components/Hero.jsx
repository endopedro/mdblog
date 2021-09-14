import React from 'react'
import Image from 'next/image'

const Hero = ({ className, cover, title, subtitle }) => (
  <div className={className}>
    <div className="h-64 w-full relative flex items-end">
      <Image
        className="opacity-30"
        src={cover}
        layout="fill"
        objectFit="cover"
      />
      <div className="relative w-full h-full p-5 flex justify-end flex-col">
        {title && (
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max mb-2">
            <p className="text-lg md:text-3xl font-bold">{title}</p>
          </div>
        )}
        {subtitle && (
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max">
            <p className="">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Hero
