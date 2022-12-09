import './select.css'

const Select = ({ title, setTitle, clearTitle, setId, list, back }) => {
  
  const selectStyle = back ? back : "#24224E";
  return (
    <div className="select__wrapper group relative">
      <div className={`select bg-[${selectStyle}]`}>
        <span className="">{title}</span>
        <div className={`h-0 overflow-hidden group-hover:h-auto absolute z-10 w-full top-full left-0 bg-[${selectStyle}]`}>
          <ul className="p-3 border border-gray-600">
            {
              !list.length ?
              <h4>Ro'yxat mavjud emas</h4> :
              list.map(item => {
                return (
                  <li key={item.id}
                    onClick={() => {
                      setTitle(item.name_uz)
                      if(setId) setId(item.id)
                      if(clearTitle) clearTitle()
                    }}
                    className="select__item cursor-pointer">
                    {item.name_uz}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Select