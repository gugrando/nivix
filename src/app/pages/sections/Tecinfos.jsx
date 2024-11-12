import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "../../Utils/AnimatedCounter"
// import Mac from "../../components/Mac"

function Tecinfos() {
    
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "start end"]
    })

    return (
        <>
            <motion.section ref={targetRef} className="z-40 w-full h-fit mt-0 md:mt-8 flex justify-center">
                <motion.div className='gap-12 flex flex-col md:flex-row justify-center items-center md:items-start w-11/12 h-full '>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex gap-4 justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 bg-white rounded-lg">
                        <AnimatedCounter from={0} to={152} animationOptions={{ duration: 3.2 }} classes="text-blue-500 text-center font-extrabold text-3xl" />
                        <h1 className="text-blue-900 text-center font-extrabold text-xl">+ Projetos</h1>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex gap-4 justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 bg-white rounded-lg">
                        <AnimatedCounter from={0} to={100} animationOptions={{ duration: 3 }} classes="text-blue-500 text-center font-extrabold text-3xl" />
                        <h1 className="text-blue-900 text-center font-extrabold text-xl">+ Clientes</h1>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex gap-3 justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 bg-white rounded-lg">
                        <AnimatedCounter from={0} to={4} animationOptions={{ duration: 2 }} classes="text-blue-500 text-center font-extrabold text-3xl" />
                        <h1 className="text-blue-900 text-center font-extrabold text-xl">Anos de Experiência</h1>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Tecinfos