import IMAGES from '../assets/Images'
import { useRef } from 'react'
import Card from '../components/Card'
import { useState } from 'react';


function MyCvWeb() {
  const container = useRef<HTMLDivElement>(null);

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    console.log('swiched')
    setIsChecked(!isChecked)
  }

  return (
    <div className='flex flex-col h-screen gap-20 bg-gray-800'>
      <div className='flex flex-col gap-6 mx-10'>
        <header className='flex flex-col items-center mt-5 gap-10'>
          <div className='flex flex-row gap-10'>
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
            <label className='themeSwitcherTwo shadow-card h-fit relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
              <input
                type='checkbox'
                className='sr-only'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${!isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
                  }`}
              >
                {IMAGES.lightIcon}
                Light
              </span>
              <span
                className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
                  }`}
              >
                {IMAGES.darkIcon}
                Dark
              </span>
            </label>
            <div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <label className="hidden"></label>
                <div className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
              </label>
            </div>
          </div>
          <div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
          </div>
        </header>

        <div className='w-auto h-0.5 mt-3 mb-4 bg-slate-700' />

        <main>
          <section>
            Youtube
          </section>
          <h1 className="text-3xl font-bold">
            Antoni Bassols Lopez
          </h1>
          <div className="m-4 text-red-500 dark:text-blue-200">Red</div>

          <h1>Stack | Technologies</h1>

          <h1>Projects</h1>
          <div className='flex flex-row items-center space-x-10'>
            <Card name="1" />
            <Card name="2" />
          </div>

          <h1>Experience</h1>
          <h1>Education</h1>
        </main>

        <div className='w-auto h-0.5 mt-3 mb-4 bg-slate-700' />

        <footer ref={container}>
          <div></div>
        </footer>

      </div>
    </div>
  )
}

export default MyCvWeb