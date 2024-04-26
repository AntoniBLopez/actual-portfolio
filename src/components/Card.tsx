import { useAppSelector } from "../app/hooks"
import IMAGES from "../assets/Images"

function Card({ name }: { name: string }) {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)

  return (
    <>
      <div className="w-[30rem] h-[35rem] bg-gray-400 rounded-lg">
        <div>{name}</div>
        <picture>
          {/* <img src={IMAGES.projects.} alt="" /> */}
          {isLightMode
            ?
            <img src={IMAGES.blackLaptop} alt="" />
            :
            < img src={IMAGES.laptop} alt="" />
          }
        </picture>
      </div>
    </>
  )
}

export default Card