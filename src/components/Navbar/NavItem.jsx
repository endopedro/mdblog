import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

const NavItem = ({ item, page, sm }) => {
  return (
    <Link href={item.slug}>
      <a
        className={cx(
          'flex items-center px-3 py-2 rounded-md font-medium transition duration-300 capitalize',
          `text-${sm ? 'sm' : 'base'}`,
          item.slug == page ? 'text-blue-300' : 'hover:text-blue-400'
        )}
        aria-current={item.slug == page ? 'page' : undefined}
      >
        {item.slug}
      </a>
    </Link>
  )
}

export default NavItem
