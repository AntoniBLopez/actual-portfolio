import { useAppDispatch, useAppSelector } from '../app/hooks';
import IMAGES from '../assets/Images';
import { changeLightMode } from '../store/slices/lightMode.tsx';



function ChangeLightMode() {
  const isLightMode = useAppSelector(state => state.isLightModeSlice.value)
  const dispatch = useAppDispatch()

  return (
    <label className='themeSwitcherTwo shadow-card h-fit relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
      <input
        type='checkbox'
        className='sr-only'
        // checked={isChecked}
        onChange={() => dispatch(changeLightMode())}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${!isLightMode ? 'bg-[#f4f7ff]' : 'bg-slate-200'
          }`}
      >
        {IMAGES.icons.light}
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium dark:text-slate-700 ${isLightMode ? 'bg-[#f4f7ff]' : 'bg-slate-200'
          }`}
      >
        {IMAGES.icons.dark}
      </span>
    </label>
  )
}

export default ChangeLightMode