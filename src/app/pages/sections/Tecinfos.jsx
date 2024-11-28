import { motion } from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "../../Utils/AnimatedCounter"

function Tecinfos() {
    const targetRef = useRef(null)

    return (
        <>
            <motion.section ref={targetRef} className="bg-[#000B14] z-40 w-full h-fit mt-0 md:mt-8 flex justify-center">
                <motion.div className='gap-12 flex flex-col md:flex-row justify-center items-center md:items-start w-11/12 h-full '>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex flex-col justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 rounded-lg">
                        <AnimatedCounter from={0} to={162} animationOptions={{ duration: 2 }} classes="text-primarySt text-center font-black text-6xl" />
                        <h1 className="text-white text-center font-extrabold text-xl">Projetos Concluídos</h1>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex flex-col justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 rounded-lg">
                        <AnimatedCounter from={0} to={99} animationOptions={{ duration: 2 }} classes="text-primarySt text-center font-black text-6xl" />
                        <h1 className="text-white text-center font-extrabold text-xl">Clientes</h1>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="flex flex-col justify-start items-center w-[18rem] h-[4.4rem] px-8 py-4 rounded-lg">
                        <AnimatedCounter from={0} to={4} animationOptions={{ duration: 2 }} classes="text-primarySt text-center font-black text-6xl" />
                        <h1 className="text-white text-center font-extrabold text-xl">Anos de Experiência</h1>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}

export default Tecinfos