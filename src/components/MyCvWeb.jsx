import React from 'react'
import IMAGES from '../assets/Images'

function MyCvWeb() {
  return (
    <div className='flex flex-col h-screen gap-20 bg-white dark:bg-gray-800'>
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
        </main>

        {/* <footer>

    </footer> */}
      </div>
    </div>
  )
}

export default MyCvWeb