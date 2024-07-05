import { useState } from "react"
import IMAGES from "../assets/Images"
import Languages from "../translate/Languages"
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeScreenSize } from "../store/slices/screenSize";
import ChangeLightMode from "../utils/ChangeLightMode";
import ChooseLanguage from "../utils/ChooseLanguage";

function Header({isSticky}: {isSticky: boolean}) {
  const [menuOpened, setMenuOpened] = useState(false)
  const isSpanish = useAppSelector(state => state.languageSlice.value)
  const screenSize = useAppSelector(state => state.screenSizeSlice.value)
  const dispatch = useAppDispatch()

  const handleResizedScreen = () => {
    dispatch(changeScreenSize())
  }

  window.onresize = handleResizedScreen

  return (
    <>
      <header className={`grid grid-flow-col py-10 gap-10 ${isSticky ? 'fixed top-10 lg:left-[12.5%] lg:w-[75%] rounded-full py-5 px-10 md:px-40 lg:px-16 bg-slate-300 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 drop-shadow-md' : ''}`}>
        <main className='flex flex-row w-fit gap-10 items-center justify-start'>
          <picture className='self-start'>
            <img className={`${isSticky ? 'w-16 h-16 lg:w-24 lg:h-24 self-start' : 'w-24 h-24 lg:w-36 lg:h-36'} transition-all duration-500 rounded-full object-cover`} src={IMAGES.profile} alt="This is the profile photo of the cv" />
          </picture>
          <section className='flex flex-col justify-center w-[16.5rem] sm:w-fit'>
            <h1 className="text-3xl font-bold text-primaryLight dark:text-primaryDark">
              {screenSize > 640
                ?
                ('Antoni Bassols Lopez')
                :
                ('Antoni B. Lopez')
              }
            </h1>
            <div className='w-auto h-px lg:h-px mt-1 mb-1 bg-slate-700' />
            <h2 className='text-black dark:text-white'>
              {screenSize > 640
                ?
                isSpanish ? Languages.es.profession : Languages.en.profession
                :
                isSpanish ? Languages.es.professionShort : Languages.en.professionShort
              }
            </h2>
            {screenSize > 1024 && !isSticky
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
            <div className={`flex gap-1 ${isSticky ? 'flex-row gap-4 transition-all duration-500' : 'flex-col-reverse'}`}>

              <ChooseLanguage />
              <ChangeLightMode />

            </div>
          </aside >
          :
          <aside className="flex content-center justify-end">
            <button className="" onClick={() => setMenuOpened(value => !value)}>{IMAGES.icons.menu}</button>
            {menuOpened
              &&
              <select>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            }
          </aside>
        }
      </header >
    </>
  )
}

export default Header