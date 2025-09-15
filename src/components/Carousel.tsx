import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Types
import type { carouselContent } from "../types/common.types"

interface CarouselProps {
  content: carouselContent[]
}

const slideVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
  exit: {
    opacity: 0,
    transition: {
        duration: 0.3,
    },
  },
};

function Carousel({ content }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [direction, setDirection] = useState('left');
  
  function handleNext() {
    // setDirection("right")
    setCurrentIndex((prevIndex) =>
        prevIndex + 1 === content.length ? 0 : prevIndex + 1
    );
  }

  const handlePrevious = () => {
    // setDirection("left")
    setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: any) => {
    // setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index);
  };

  return (
    <div className="relative">

      {/* The carousel contents */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={ currentIndex }
            variants={ slideVariants}
            initial= "hidden"
            animate="visible"
            exit="exit"
            className="size-full object-cover"
          >
            <img src={ content[currentIndex].image } className="size-full rounded-xl object-cover" />
            <div className="absolute bottom-1/9 left-0 right-0 mx-auto py-1 h-10 w-40 justify-items-center-safe text-white bg-red rounded-xl">
              <p className="text-xlarge">{ content[currentIndex].header }</p>
              <p className="text-medium">{ content[currentIndex].subHeader }</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* The previous and next buttons */}
      <div className="flex justify-between">
        <div className="carouselButtonLeft" onClick={ handlePrevious }>
          {/* Icon for the previous button */}
          <svg fill="#fff" height="20px" width="20px" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xmlSpace="preserve" stroke="#fff" strokeWidth="0.00024000000000000003">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g id="previous"> <g> <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "></polygon> </g> </g> </g>
          </svg>
        </div>

        <div className="carouselButtonRight" onClick={ handleNext }>
          {/* Icon for the nex button */}
          <svg fill="#fff" height="20px" width="20px" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.00 24.00" xmlSpace="preserve" stroke="#fff" strokeWidth="0.00024000000000000003" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="previous"> <g> <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "></polygon> </g> </g> </g>
          </svg>
        </div>
      </div>

      {/* The position indicators */}
      <div className="flex absolute bottom-1/20 left-0 right-0 my-auto gap-1 justify-center">
        {content.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-1 rounded-xl ${currentIndex === index ? "bg-red" : "bg-white"}`}
            onClick={() => handleDotClick(index)}
          >
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Carousel