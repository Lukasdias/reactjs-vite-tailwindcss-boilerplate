import { motion, MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col gap-5 justify-center items-center w-screen h-screen ">
        <h1 className="mt-5 max-w-[60vw] text-5xl font-bold text-center text-orange-700 animate-pulse">
          React + Vite + TS + FramerMotion + TailwindCSS + HeadlessUI + Zustand
          + Jest
        </h1>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="flex w-[250px] h-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        />
      </div>
    </MotionConfig>
  )
}

export default App
