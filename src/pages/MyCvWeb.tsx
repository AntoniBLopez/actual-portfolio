import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard'
// import Technologies from '../components/Technologies';
import IMAGES from '../assets/Images';
import { Technologies } from '../components/Technologies';

const projectsList = ['bingogame', 'socialmediaproject', 'expirydates'] as const

function MyCvWeb() {

  const [isSticky, setIsSticky] = useState(false)
  const container = useRef<HTMLDivElement>(null);
  const technologiesList = Object.keys(IMAGES.technologies)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <div className={`flex flex-col h-full w-full px-10 md:px-40 lg:px-80 bg-slate-100 dark:bg-gray-800 ${isSticky ? 'pt-[225px]' : 'pt-0'}`}>

      <Header isSticky={isSticky} />

      <main className='flex flex-col gap-20'>
        <span>
          <h3 className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
        </span>

        <section className='flex flex-col w-full gap-10'>
          <h1 className='text-5xl font-bold text-black dark:text-white'>Projects</h1>
          <div className='flex flex-wrap gap-10 items-center justify-center'>
            {
              projectsList.map((el, index) => {
                return <ProjectCard
                  key={index}
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

        <div className='flex flex-col gap-10'>
          <h1 className='text-5xl font-bold text-black dark:text-white'>Technologies</h1>
          <div className='flex flex-wrap gap-10 items-center justify-center'>
            {
              technologiesList.map((tech, i) => {
                return <Technologies key={i} item={{ id: i, name: tech, image: IMAGES.technologies[tech as keyof typeof IMAGES.technologies] }} />
              })
            }
          </div>
        </div>


        <h1 className='text-5xl font-bold text-black dark:text-white'>Experience</h1>
        <div className='h-40'>In proces...</div>
        <h1 className='text-5xl font-bold text-black dark:text-white'>Education</h1>
        <div className='h-40'>In proces...</div>
      </main>

      <footer ref={container}>
        <div></div>
      </footer>

    </div>
  )
}

export default MyCvWeb