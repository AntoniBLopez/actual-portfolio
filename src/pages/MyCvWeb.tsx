import { useRef } from 'react'
import Card from '../components/Card'
import CVheader from '../components/CVheader'

function MyCvWeb() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col h-screen gap-20 bg-gray-800'>
      <div className='flex flex-col gap-6 mx-10'>

        <CVheader />

        <div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, laborum eos! Odit blanditiis vitae iure asperiores omnis adipisci, harum, aperiam vero doloribus consequatur dolores quis numquam nobis illo iste ducimus.</h3>
        </div>

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