import { useState } from "react"
import IMAGES from "../assets/Images"
import Languages from "../translate/Languages"
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeLightMode } from '../features/lightMode/lightModeSlice';
import { changeScreenSize } from "../features/screenSize/screenSizeSlice";

function CVHeader() {
  const [isSpanish, setIsSpanish] = useState(true)
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  const screenSize = useAppSelector(state => state.screenSizeSlice.value)
  const dispatch = useAppDispatch()

  const handleResizedScreen = () => {
    dispatch(changeScreenSize())
  }
  window.onresize = handleResizedScreen

  const handleChange = () => {
    setIsSpanish(!isSpanish)
  }

  return (
    <header className='grid grid-flow-col mt-5 gap-10 max-'>
      <main className='flex flex-row w-fit gap-10 items-center justify-start'>
        <picture>
          <img className='w-24 lg:w-36 h-24 lg:h-36 rounded-full object-cover' src={IMAGES.profile} alt="This is the profile photo of the cv" />
        </picture>
        <section className='flex flex-col justify-center min-w-64'>
          <h1 className="text-3xl font-bold text-primaryLight dark:text-primaryDark">
            {screenSize > 610
              ?
              ('Antoni Bassols Lopez')
              :
              ('Antoni B. Lopez')
            }
          </h1>
          <div className='w-auto h-px lg:h-px mt-1 mb-1 bg-black dark:bg-white' />
          <h2 className='text-black dark:text-white'>
            {screenSize > 610
              ?
              isSpanish ? Languages.es.profession : Languages.en.profession
              :
              isSpanish ? Languages.es.professionShort : Languages.en.professionShort
            }
          </h2>
          {screenSize > 1024
            &&
            <div className='flex flex-row gap-3'>
              <button onClick={() => window.open('https://www.linkedin.com/in/antoniblopez')}>{IMAGES.icons.socialMedia.linkedin}</button>
              <button onClick={() => window.open('https://www.youtube.com/@AntoniLopezDev')}>{IMAGES.icons.socialMedia.youtube}</button>
            </div>
          }
        </section>
      </main>
      {screenSize <= 1024
        &&
        <div className='flex flex-row gap-3 justify-center'>
          <button onClick={() => window.open('https://www.linkedin.com/in/antoniblopez')}>{IMAGES.icons.socialMedia.linkedin}</button>
          <button onClick={() => window.open('https://www.youtube.com/@AntoniLopezDev')}>{IMAGES.icons.socialMedia.youtube}</button>
        </div>
      }
      {screenSize > 1024
        ?
        <aside className='flex flex-col mt-5 items-end'>
          <div className="flex flex-col gap-1">
            <label className='themeSwitcherTwo shadow-card h-fit relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
              <input
                type='checkbox'
                className='sr-only'
                // checked={isChecked}
                onChange={() => dispatch(changeLightMode())}
              />
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${!isLightMode ? 'bg-[#f4f7ff]' : 'bg-slate-200'
                  }`}
              >
                {IMAGES.icons.light}
              </span>
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${isLightMode ? 'bg-[#f4f7ff]' : 'bg-slate-200'
                  }`}
              >
                {IMAGES.icons.dark}
              </span>
            </label>
            <div className='flex flex-row h-fit items-center gap-2 justify-center'>
              <img src={IMAGES.spanish} className='w-10 h-10' alt="" />
              <label className="relative inline-flex flex-col cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" onChange={handleChange} />
                <label className="hidden"></label>
                < div className="peer h-4 w-11 rounded-full border bg-yellow-400 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-400 peer-checked:after:translate-x-full peer-focus:ring-blue-400"></div>
              </label>
              <img src={IMAGES.english} className='w-10 h-10' alt="" />
            </div>
          </div>
        </aside >
        :
        <aside className="flex content-center justify-end">
          <button className="" onClick={() => window.open('https://www.youtube.com/@AntoniLopezDev')}>{IMAGES.icons.menu}</button>
        </aside>
      }
    </header >
  )
}

export default CVHeader