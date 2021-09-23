import React from 'react'
import cx from 'classnames'

const PortLetBody = ({ children, className }) => (
  <div className={cx('px-3 py-5 sm:px-5 sm:py-7', className)}>{children}</div>
)

export default PortLetBody
