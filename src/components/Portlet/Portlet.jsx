import React from 'react'
import cx from 'classnames'

const Portlet = ({ children, className, bg }) => (
  <div
    className={cx(
      'rounded-lg border border-woodsmoke-300 overflow-hidden',
      { 'bg-woodsmoke-500': bg },
      className
    )}
  >
    {children}
  </div>
)

export default Portlet
