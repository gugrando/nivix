import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import CaseSlide from "../../Utils/CaseSlide"
import Sec from "../../Utils/Sec"

const CasesSlide = () => {

    const refGeral = useRef(null)
    const { scrollYProgress } = useScroll({
        target: refGeral,
    })
    const x = useTransform(scrollYProgress,[0.1 ,1], ["0%", "-85%"])

    return (
        <>
            <motion.section ref={refGeral} className="bg-[#000B14] overflow-x-clip h-[500vh] w-full p-8 ">
                <motion.div className="lg:mt-40 mt-8 w-full flex flex-col items-center">
                    <motion.h1 className="md:text-6xl text-4xl text-center text-white font-bold">
                        <Sec text={"Projetos"}/>
                        Deixe nossos projetos falarem por nós
                    </motion.h1>
                    <motion.p className="md:text-xl text-lg text-center text-gray-400">
                        Não vamos tentar te convencer com palavras bonitinhas, veja por você mesmo nossos <b>RESULTADOS</b>.
                    </motion.p>
                </motion.div>
                <div className="h-[10rem] w-[10rem] mt-8 mr-8 bg-gray-500/30 absolute rounded-full"></div>
                
                <motion.div className=" h-[100vh] sticky top-0 flex items-center justify-start">
                    <div className="h-[16rem] w-[6rem] bg-gray-500/30 absolute rounded-full mt-[8rem]"></div>
                    <div className="h-[8rem] w-[8rem] bg-gray-500/30 absolute rounded-full mt-[40rem] left-[40rem]"></div>
                    <div className="h-[8rem] w-[8rem] bg-gray-500/30 absolute rounded-full mt-[30rem] left-[90rem]"></div>
                    <div className="h-[8rem] w-[12rem] bg-gray-500/30 absolute rounded-full mt-[-35rem] left-[80rem]"></div>
                    <motion.div style={{x}} className="mt-8 flex gap-8 justify-center">                    
                        <CaseSlide logo={"src/assets/crafter.png"}/>
                        <CaseSlide/>
                        <CaseSlide/>
                        <CaseSlide/>
                        <CaseSlide/>
                        <CaseSlide/>
                        <CaseSlide/>
                        <motion.div className="bg-black border border-white/5 shadow-md shadow-white/30  backdrop-blur-lg flex items-center justify-center flex-col p-8 w-[150vw] h-[680px] md:w-[90vw] md:h-[780px] rounded-3xl">
                            <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 200 }} className="text-7xl text-white font-bold">+487 PROJETOS</motion.h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}
 
export default CasesSlide;