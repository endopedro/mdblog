import React from 'react'
import Image from 'next/image'

const Hero = ({ className, settings }) => {
  return (
    <div className={className}>
      <div className="h-64 w-full relative flex items-end">
        <Image
          src={settings.cover.secure_url}
          layout="fill"
          objectFit="cover"
        />
        <div className="relative w-full h-full p-5 flex justify-end flex-col">
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max mb-2">
            <p className="text-lg md:text-3xl font-bold ">
              Wellcome to {settings.name}!
            </p>
          </div>
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max">
            <p className="">{settings.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
