import { animate, motion, useScroll, useTransform,} from "framer-motion"
import { useRef, useState } from "react"
import TiltCard from "../../Utils/TiltCards";

const Founders = () => {
    return (
        <>
            <motion.div className="bg-black w-full flex justify-center">
                <motion.h1 className="text-4xl md:text-6xl font-bold text-white">
                    Conheça nossos líderes
                </motion.h1>
            </motion.div>
            <motion.section className="flex flex-wrap gap-8 items-center justify-center w-full h-fit bg-red-900">
                {/* <motion.div className="w-[28rem] h-[32rem] bg-blue-400">
                    
                </motion.div>
                <motion.div className="w-[28rem] h-[32rem] bg-blue-400">
                    
                </motion.div>
                <motion.div className="w-[28rem] h-[32rem] bg-blue-400">
                    
                </motion.div> */}
                <TiltCard/>
                <TiltCard/>
                <TiltCard/>
            </motion.section>
        </> 
    );
}
 
export default Founders;