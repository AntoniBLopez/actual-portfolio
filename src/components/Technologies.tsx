"use client"
import { useState, MouseEvent } from "react"
import {
  motion,
  useTransform,
  // AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"

export const Technologies = ({ item }: { item: { id: number, name: string, image: string } }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )
  const handleMouseMove = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target instanceof HTMLElement) {
      const halfWidth = target.offsetWidth / 2
      x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
    }
  }

  return (
    <>
      <div
        className="-mr-4  relative group"
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {hoveredIndex === item.id && (
          <motion.div
            className="absolute -top-14 left-4 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
          >
            <div className="absolute inset-x-5 z-30 w-[50%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
            <div className="absolute left-4 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
            <div className="font-bold text-white relative z-30 text-base">
              {item.name}
            </div>
          </motion.div>
        )}
        <div onMouseMove={handleMouseMove} className="p-2 border-2 rounded-full group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500">
          <img className="object-top w-20 h-auto " src={item.image} alt={item.name} />
        </div>
      </div>
    </>
  )
}