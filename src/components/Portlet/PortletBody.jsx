import React from 'react'
import cx from 'classnames'

const PortLetBody = ({ children, className }) => (
  <div className={cx('px-5 py-7', className)}>{children}</div>
)

export default PortLetBody
