const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='bg-[#3f007d]/40 text-[#b2b2ff] text-sm font-medium px-2.5 py-1 rounded-xl border border-[#b2b2ff]'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Badge
