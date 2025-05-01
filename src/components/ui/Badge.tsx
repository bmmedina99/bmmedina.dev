const Badge = ({ items }: { items: string[] }) => {
  return (
    <ul className='flex flex-wrap items-center justify-center gap-2 my-4'>
      {items.map((item) => (
        <li
          key={item}
          className='inline-block bg-[#3f007d] text-[#b2b2ff] text-sm font-medium px-3 rounded-full'
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Badge
