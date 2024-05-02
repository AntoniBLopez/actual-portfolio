import { useAppSelector } from "../app/hooks"
import IMAGES from "../assets/Images"

function Card({ project, haveGithub, figmaLink }: { project: keyof typeof IMAGES.projects, haveGithub: boolean, figmaLink: string }) {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  const mode = isLightMode ? 'light' : 'dark'

  return (
    <div className="flex flex-col gap-3">
      <picture className="max-w-[300px]">
        <img src={IMAGES.projects[project][mode]} alt="Laptop image that has a project" />
      </picture>
      <div className="grid grid-cols-lg1autoauto max-mobile:grid-cols-mobile1autoauto mx-10 gap-3 justify-center">
        <button
          className="btn btn-outline px-3 text-2xl text-black dark:text-white border-gray-300 rounded-full"
          onClick={() => window.open(`https://${project}.fly.dev/`)}
        >See Live</button>
        <button
          className="btn btn-outline w-fit h-fit p-1 rounded-full justify-self-center"
          onClick={() => window.open(`https://${haveGithub ? 'github' : 'gitlab'}.com/AntoniBLopez/${project}`)}
        >
          <img
            className="w-10 h-10"
            src={IMAGES.icons.socialMedia[haveGithub ? 'github' : 'gitlab'][mode]}
            alt={`${haveGithub ? 'Github' : 'Gitlab'} Icon clickable`} />
        </button>
        {figmaLink !== ''
          &&
          < button
            className="btn btn-outline rounded-full h-full p-2 justify-self-center"
            onClick={() => window.open(figmaLink)}
          >
            <img className="w-8 h-8" src={IMAGES.icons.socialMedia.figma[mode]} alt="Laptop image that has a project" />
          </button>
        }
      </div>
    </div >
  )
}

export default Card