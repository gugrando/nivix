import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

function Draw(){
    const refGeral = useRef(null)
    const { scrollYProgress } = useScroll({
        target: refGeral,
        offset: ["center center", "start end"]
    })
    
    const scale1 = useTransform(scrollYProgress, [1, 0], [0, 1.6])
    const x = useTransform(scrollYProgress, [0, 1], ['-12%', '-150%'])
    const opacity1 = useTransform(scrollYProgress, (op=>{
        return op <=0.45 ? 1 : 0
    }))
    

    return (
        <>
            <motion.section whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} ref={refGeral}  className="z-10 w-full h-fit flex flex-col items-start opacity-100 mt-[-4rem] md:mt-[0rem]">
                <motion.div style={{scale: scale1, x: x, opacity: opacity1, }} className="relative overflow-hidden opacity-0 overflow-x-auto gap-8 p-8 w-fit h-fit flex justify-center ease-in transition-opacity duration-200">
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case1.webp" alt="" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case2.webp" alt="" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case3.webp" alt="" className="w-full  rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case4.webp" alt="" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case5.webp" alt="" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case2.webp" alt="" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="src/assets/case1.webp" alt="" className="shadow-lg w-full rounded-md" />
                    </motion.div>
                </motion.div>
            </motion.section>
            {/* <motion.h1 whileInView={{ opacity: 1, }} className="transition-all duration-1000 delay-500 mt-40 md:mt-24 w-fit text-center text-white font-extrabold text-5xl md:text-7xl">
                Mais de 195 projetos concluídos!
            </motion.h1>
            <motion.p className="text-xl w-full: mt-12 text-center text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit est. Perferendis exercitationem officia excepturi, impedit velit perspiciatis! Voluptas, eos.
            </motion.p> */}
        </>
    )
}

export default Draw