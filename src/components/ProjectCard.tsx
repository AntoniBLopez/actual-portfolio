import { useAppSelector } from "../app/hooks"
import IMAGES from "../assets/Images"

function Card({ project}: { project: string}) {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  const mode = isLightMode ? 'light' : 'dark'

  const printProject = (project: keyof typeof IMAGES.projects, type: 'dark' | 'light') => {
    console.log('One', Object.prototype.isPrototypeOf.call(IMAGES.projects, project))
    console.log('Two', Object.prototype.hasOwnProperty.call(IMAGES.projects[project], type))
    if (Object.prototype.hasOwnProperty.call(IMAGES.projects[project], type)) {
      return IMAGES.projects[project][type]
    }
    return 'Project not found'
  }

  return (
    <>
      <div className="">
        <picture>
          <img src={isLightMode ? printProject(project, mode) : printProject(project, mode)} alt="Laptop image that has a project" />
        </picture>
      </div>
    </>
  )
}

export default Card