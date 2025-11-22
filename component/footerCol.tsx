
type FooterCol = {
  id: string,
  title: string,
  items: string[]
}
const FooterCol = ({ id, title, items }: FooterCol) => {

  return (
    <div className="relative">
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
      />
      <label htmlFor={id} className="flex gap-4">
        <span className="text-2xl text-white font-semibold" >
          {title}
        </span>
        
      </label>
      <span className="lg:hidden text-lg absolute left-full top-0 transition-transform duration-300 peer-checked:rotate-180">▾</span>
      <ul className="text-white text-[18px]
                          max-h-0 opacity-0 overflow-hidden
                          peer-checked:max-h-40 peer-checked:opacity-100
                          transition-all duration-300
                          lg:max-h-none lg:opacity-100 lg:overflow-visible lg:mt-2">
        {items.map(item => (<li key={item} className="hover:underline">{item}</li>))}
      </ul>
    </div>

  )
}
export default FooterCol