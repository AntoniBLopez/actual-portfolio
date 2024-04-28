import { useAppSelector } from "../app/hooks"
import IMAGES from "../assets/Images"

function Card({ index }: { index: string }) {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  console.log(index)

  return (
    <>
      <div className="">
        <picture>
          {isLightMode
            ?
            <img src={IMAGES.blackLaptop} alt="Laptop image that has a project" />
            :
            < img src={IMAGES.laptop} alt="Laptop image that has a project" />
          }
        </picture>
      </div>
    </>
  )
}

export default Card