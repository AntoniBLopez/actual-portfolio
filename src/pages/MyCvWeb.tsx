import { useRef } from 'react'
import CVHeader from '../components/CVHeader';
import ProjectCard from '../components/ProjectCard'

function MyCvWeb() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col h-full w-full gap-20 bg-slate-100 dark:bg-gray-800'>
      <div className='flex flex-col gap-6 mx-10 md:mx-40 lg:mx-80'>

        <CVHeader />

        <div>
          <h3 className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
        </div>

        <div className='w-auto h-px mt-3 mb-4 bg-slate-700' />

        <main>
          <section>

          </section>

          <h1 className='text-5xl font-bold text-black dark:text-white'>Stack | Technologies</h1>
          <div className='h-96'></div>
          <h1 className='text-5xl font-bold text-black dark:text-white'>Projects</h1>
          <div className='flex flex-row items-center space-x-10'>
            <ProjectCard project='bingogame' />
            <ProjectCard project='socialmedia' />
          </div>

          <h1 className='text-5xl font-bold text-black dark:text-white'>Experience</h1>
          <h1 className='text-5xl font-bold text-black dark:text-white'>Education</h1>
        </main>

        <div className='w-auto h-px mt-3 mb-4 bg-slate-700' />

        <footer ref={container}>
          <div></div>
        </footer>

      </div>
    </div>
  )
}

export default MyCvWeb