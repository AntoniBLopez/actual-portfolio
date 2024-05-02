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
    <picture className="max-w-[300px]">
      <img src={printProject(project, mode)} alt="Laptop image that has a project" />
      <button className="btn btn-outline w-72 rounded-full hover:bg-primary hover:text-white">See Live</button>
      <button className="btn btn-outline w-fit h-fit p-5 rounded-full">{IMAGES.icons.socialMedia.youtube}</button>
    </picture>
  )
}

export default Card