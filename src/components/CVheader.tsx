import { useState } from "react"
import IMAGES from "../assets/Images"
import Languages from "../translate/Languages"
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeScreenSize } from "../store/slices/screenSize";
import ChangeLightMode from "../utils/ChangeLightMode";
import ChooseLanguage from "../utils/ChooseLanguage";

function CVHeader() {
  const [menuOpened, setMenuOpened] = useState(false)
  const isSpanish = useAppSelector(state => state.languageSlice.value)
  const screenSize = useAppSelector(state => state.screenSizeSlice.value)
  const dispatch = useAppDispatch()

  const handleResizedScreen = () => {
    dispatch(changeScreenSize())
  }
  window.onresize = handleResizedScreen

  return (
    <header className='grid grid-flow-col my-10 gap-10 max-'>
      <main className='flex flex-row w-fit gap-10 items-center justify-start'>
        <picture>
          <img className='w-24 lg:w-36 h-24 lg:h-36 rounded-full object-cover' src={IMAGES.profile} alt="This is the profile photo of the cv" />
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

            <ChangeLightMode />
            <ChooseLanguage />

          </div>
        </aside >
        :
        <aside className="flex content-center justify-end">
          <button className="" onClick={() => setMenuOpened(value => !value)}>{IMAGES.icons.menu}</button>
          {menuOpened
            &&
            <section>

            </section>
          }
        </aside>
      }
    </header >
  )
}

export default CVHeader