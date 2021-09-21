import React from 'react'
import cx from 'classnames'

const PortLetFooter = ({ children, className }) => (
  <div
    className={cx(
      'bg-woodsmoke-500 px-5 py-3 font-bold text-md border-t border-woodsmoke-400',
      className
    )}
  >
    {children}
  </div>
)

export default PortLetFooter
