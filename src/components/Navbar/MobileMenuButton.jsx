import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BiMenu } from 'react-icons/bi'
import cx from 'classnames'

const MobileMenuButton = ({ open }) => (
  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 outline-none">
    <span className="sr-only">Open main menu</span>
    <BiMenu
      size="24"
      className={cx('duration-300 transform', { '-rotate-90': open })}
    />
  </Disclosure.Button>
)

export default MobileMenuButton
