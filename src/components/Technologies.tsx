import IMAGES from "../assets/Images"

function Technologies({tech}: {tech: keyof typeof IMAGES.technologies}) {


  console.log(tech)
  return (
    <>
    <div className="w-fit p-2 rounded-full bg-slate-300">
    <picture>
      <img className="w-20 h-auto self-center" src={IMAGES.technologies[tech]} alt="This is a icon which represents my tech knowledge" />
    </picture>
    </div>
    </>
  )
}

export default Technologies