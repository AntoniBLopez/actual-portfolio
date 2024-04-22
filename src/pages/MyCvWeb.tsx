import { useRef } from 'react'
import CVHeader from '../components/CVHeader';
import Card from '../components/Card'
import useTheme from '../hooks/useTheme';
// import Languages from '../translate/Languages.tsx'
// import IMAGES from '../assets/Images';
// import { useState } from 'react';
// import { useEffect } from 'react';

function MyCvWeb() {
  const container = useRef<HTMLDivElement>(null);

  const { isLightMode } = useTheme()

  // const [isLightMode, setIsLightMode] = useState(true)
  // const [isSpanish, setIsSpanish] = useState(true)

  // const handleChange = () => {
  //   setIsSpanish(!isSpanish)
  // }

  // useEffect(() => {
  //   console.log(isLightMode)
  // }, [isLightMode])

  return (
    <div className={isLightMode ? 'light' : 'dark'}>
      <div className='flex flex-col h-screen gap-20 bg-slate-100 dark:bg-gray-800'>
        <div className='flex flex-col gap-6 mx-10'>

          <CVHeader />

          <div>
            <h3 className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
          </div>

          <div className='w-auto h-0.5 mt-3 mb-4 bg-slate-700' />

          <main>
            <section>

            </section>

            <h1 className='text-black dark:text-white'>Stack | Technologies</h1>

            <h1 className='text-black dark:text-white'>Projects</h1>
            <div className='flex flex-row items-center space-x-10'>
              <Card name="1" />
              <Card name="2" />
            </div>

            <h1 className='text-black dark:text-white'>Experience</h1>
            <h1 className='text-black dark:text-white'>Education</h1>
          </main>

          <div className='w-auto h-0.5 mt-3 mb-4 bg-slate-700' />

          <footer ref={container}>
            <div></div>
          </footer>

        </div>
      </div>
    </div>
  )
}

export default MyCvWeb