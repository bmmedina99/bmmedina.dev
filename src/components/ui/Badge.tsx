const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='me-2 px-2.5 py-0.5 text-xs font-medium bg-indigo-900 rounded-sm text-indigo-200'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Badge
