import React from 'react'

const Footer = ({ blogName }) => {
  return (
    <div className="flex py-3 md:py-5 border-t border-woodsmoke-400 text-center">
      <div className="mx-auto text-right">
        <p className="text-lg font-extrabold">{blogName}</p>
        <p className="text-sm -mt-2">blog</p>
      </div>
    </div>
  )
}

export default Footer
