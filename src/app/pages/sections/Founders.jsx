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
            <motion.section className="flex flex-wrap gap-8 items-center justify-center w-full h-fit bg-black">
                {/* <TiltCard founderText={"Co-Founder & CTO"} founderName={"Gustavo Grando"}/> */}
                <TiltCard founderText={"Co-Founder & Chefe de Branding"} founderName={"Danilo Felizardo"} founderImg={"src/assets/danilo.jpeg"}/>
                {/* <TiltCard founderText={"Co-Founder & Gestor de Tráfego"} founderName={"Everthy Bonfim"}/> */}
            </motion.section>
        </> 
    );
}
 
export default Founders;