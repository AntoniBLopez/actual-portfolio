import { useAppSelector } from "../app/hooks"
import IMAGES from "../assets/Images"

function Card({ project }: { project: keyof typeof IMAGES.projects }) {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  const mode = isLightMode ? 'light' : 'dark'

  const printProject = (project: keyof typeof IMAGES.projects, type: 'dark' | 'light') => {
    if (Object.prototype.hasOwnProperty.call(IMAGES.projects[project], type)) {
      return IMAGES.projects[project][type]
    }
    return 'Project not found'
  }

  return (
    <>
      <div className="">
        <picture>
          <img src={printProject(project, mode)} alt="Laptop image that has a project" />
        </picture>
      </div>
    </>
  )
}

export default Card