
import { useState } from 'react'
import IMAGES from '../assets/Images'


function CVheader() {

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    console.log('swiched')
    setIsChecked(!isChecked)
  }
  return (
    <header className='grid grid-flow-col grid-cols-1 mt-5 gap-10'>
      <main className='flex flex-row gap-10 items-center justify-center'>
        <picture>
          <img className='rounded-full object-cover w-36 h-36' src={IMAGES.profileCV} alt="This is the profile photo of the cv" />
        </picture>
        <section className='flex flex-col justify-center'>
          <h1 className="text-3xl font-bold">
            Antoni Bassols Lopez
          </h1>
          <div className='w-auto h-0.5 mt-3 mb-4 bg-white' />
          <h2>Frontend Software Developer</h2>
        </section>
      </main>
      <aside className='flex flex-col items-center gap-3 mt-5 mr-5'>
        <label className='themeSwitcherTwo shadow-card h-fit relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
          <input
            type='checkbox'
            className='sr-only'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${!isChecked ? 'text-primary bg-[#f4f7ff]' : 'bg-slate-200'
              }`}
          >
            {IMAGES.lightIcon}
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${isChecked ? 'text-primary bg-[#f4f7ff]' : 'bg-slate-200'
              }`}
          >
            {IMAGES.darkIcon}
          </span>
        </label>
        <div className='flex flex-row h-fit items-center gap-2'>
          <img src={IMAGES.spanish} className='w-10 h-10' alt="" />
          <label className="relative inline-flex flex-col cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <label className="hidden"></label>
            <div className="peer h-4 w-11 rounded-full border bg-yellow-400 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-400 peer-checked:after:translate-x-full peer-focus:ring-blue-400"></div>
          </label>
          <img src={IMAGES.english} className='w-10 h-10' alt="" />
        </div>
      </aside>
    </header>
  )
}

export default CVheader