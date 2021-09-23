import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { RiSearchLine } from 'react-icons/ri'

const SearchInput = ({ className }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    router.push({ pathname: '/search', query: { search: searchTerm } })
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <div class="relative">
        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <RiSearchLine />
          </button>
        </span>
        <input
          type="text"
          class="py-2 text-sm bg-woodsmoke-300 rounded-md pl-5 pr-10 focus:outline-none focus:bg-woodsmoke-50 transition duration-300 w-full"
          placeholder="Search..."
          autocomplete="off"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchInput
