import { useRef } from 'react'
import CVHeader from '../components/CVHeader';
import ProjectCard from '../components/ProjectCard'

const projectsList = ['bingogame', 'socialmediaproject', 'expirydates'] as const

function MyCvWeb() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col h-full w-full px-10 md:px-40 lg:px-80 bg-slate-100 dark:bg-gray-800'>

      <CVHeader />

      <main className='flex flex-col gap-10'>
        <span>
          <h3 className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
        </span>

        <section className='w-full'>
          <h1 className='mb-10 text-5xl font-bold text-black dark:text-white'>Projects</h1>
          <div className='flex flex-wrap gap-10 items-center justify-center'>
            {
              projectsList.map(el => {
                return <ProjectCard
                  project={el}
                  haveGithub={el === 'expirydates' ? true : false}
                  figmaLink={el === 'expirydates'
                    ? 'https://www.figma.com/file/UFwTMR5ZfRx4pFKIZtYexg/AO-Expiry-Dates-App?type=design&node-id=0%3A1&mode=design&t=mFoQq2AYaMoJuk0h-1'
                    : el === 'socialmediaproject'
                      ? 'https://www.figma.com/file/GvhFMjkPIVvp92fT2k7kdO/Social-Media-App?type=design&node-id=0%3A1&mode=design&t=nGjjEIrU5K3Ead7y-1'
                      : ''
                  }
                />
              })
            }
          </div>
        </section>

        <h1 className='text-5xl font-bold text-black dark:text-white'>Stack</h1>
        <div className='h-96'></div>


        <h1 className='text-5xl font-bold text-black dark:text-white'>Experience</h1>
        <h1 className='text-5xl font-bold text-black dark:text-white'>Education</h1>
      </main>

      <footer ref={container}>
        <div></div>
      </footer>

    </div>
  )
}

export default MyCvWeb