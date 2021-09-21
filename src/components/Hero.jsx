import React from 'react'
import Image from 'next/image'

import Portlet, { PortletFooter } from '../components/Portlet'

const Hero = ({ className, cover, title, subtitle }) => (
  <Portlet className={className}>
    <div className="h-64 w-full relative flex items-end">
      <Image
        className="opacity-30"
        src={cover}
        layout="fill"
        objectFit="cover"
      />
      <div className="relative w-full h-full p-5 flex justify-end flex-col">
        {title && (
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max mb-2 rounded-lg">
            <p className="text-lg md:text-3xl font-bold">{title}</p>
          </div>
        )}
        {subtitle && false && (
          <div className="bg-woodsmoke-500 py-5 px-7 shadow md:w-max">
            <p className="">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
    {subtitle && <PortletFooter>{subtitle}</PortletFooter>}
  </Portlet>
)

export default Hero
