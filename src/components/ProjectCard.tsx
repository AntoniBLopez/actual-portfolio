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
    <div className="flex flex-col gap-3">
      <picture className="max-w-[300px]">
        <img src={printProject(project, mode)} alt="Laptop image that has a project" />
      </picture>
      <div className="grid grid-cols-lg1autoauto max-mobile:grid-cols-mobile1autoauto mx-10 gap-3 justify-center">
        <button className="btn btn-outline px-3 text-2xl text-black dark:text-white border-gray-300 rounded-full">See Live</button>
        <button className="btn btn-outline w-fit h-fit p-1 rounded-full justify-self-center">
          <img className="w-10 h-10" src={isLightMode ? IMAGES.icons.socialMedia.github.light : IMAGES.icons.socialMedia.github.dark} alt="GitHub Icon clickable" />
        </button>
        <button className="btn btn-outline w-fit h-fit p-1 rounded-full justify-self-center">
          <img className="w-10 h-10" src={isLightMode ? IMAGES.icons.socialMedia.gitlab.light : IMAGES.icons.socialMedia.gitlab.dark} alt="GitLab Icon clickable" />
        </button>
      </div>
    </div >
  )
}

export default Card