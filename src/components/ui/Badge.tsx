import React from 'react'

export const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='bg-[#12042d]/40 text-[#b2b2ff] text-sm font-medium px-2.5 py-1 rounded-xl border border-[#7042f8]'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
