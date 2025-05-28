const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='inline-block px-3 text-sm font-medium bg-indigo-900 rounded-full text-periwinkle'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Badge
