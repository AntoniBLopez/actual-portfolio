import IMAGES from "../assets/Images"
import { useAppDispatch } from '../app/hooks';
import { changeLanguage } from "../store/slices/language";



function ChooseLanguage() {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(changeLanguage())
  }

  return (
    <div className='flex flex-row h-fit items-center gap-2 justify-center self-center'>
      <img src={IMAGES.spanish} className='w-10 h-10' alt="" />
      <label className="relative inline-flex flex-col cursor-pointer items-center">
        <input type="checkbox" className="peer sr-only" onChange={handleChange} />
        <label className="hidden"></label>
        < div className="peer h-4 w-11 rounded-full border bg-yellow-400 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-400 peer-checked:after:translate-x-full peer-focus:ring-blue-400"></div>
      </label>
      <img src={IMAGES.english} className='w-10 h-10' alt="" />
    </div>
  )
}

export default ChooseLanguage