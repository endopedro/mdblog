import React from 'react'
import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'

import SearchInput from '../SearchInput'
import MobileMenuButton from './MobileMenuButton'
import NavItem from './NavItem'

const Navbar = ({ page, settings }) => (
  <Disclosure
    as="nav"
    className="border-b border-woodsmoke-300 mb-2 absolute z-10 w-full top-0"
  >
    {({ open }) => (
      <div className="bg-woodsmoke-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-14">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <MobileMenuButton open={open} />
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href={'/'}>
                  <a className="text-2xl font-bold hover:text-blue-400 transition duration-300">
                    {settings.name}
                  </a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {settings.pages.map((item) => (
                    <NavItem item={item} page={page} sm key={item._id} />
                  ))}
                </div>
              </div>
              <SearchInput className="ml-auto hidden sm:block" />
            </div>
          </div>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {settings.pages.map((item) => (
                <NavItem item={item} page={page} key={item._id} />
              ))}
            </div>
            <SearchInput className="p-2" />
          </Disclosure.Panel>
        </Transition>
      </div>
    )}
  </Disclosure>
)

export default Navbar
