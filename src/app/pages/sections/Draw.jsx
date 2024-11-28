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
        return op <= 0.45 ? 1 : 0
    }))

    return (
        <>
            <motion.section whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} ref={refGeral}  className="z-10 w-full h-fit flex flex-col items-start opacity-100 mt-[-4rem] md:mt-[0rem]">
                <motion.div style={{scale: scale1, x: x, opacity: opacity1, }} className="relative overflow-hidden opacity-0 overflow-x-auto gap-8 p-8 w-fit h-fit flex justify-center ease-in transition-opacity duration-200">
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/ita-medium.png" alt="Imagem do Projeto 2" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/hightower-medium.png" alt="Imagem do Projeto 6" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/craft-medium.png" alt="Imagem do Site do Projeto Craft Sushi" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/ita-medium.png" alt="Imagem do Projeto 7" className="shadow-lg w-full rounded-md" />
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/silent-mediumm.png" alt="Imagem do Projeto 4" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/svieira-medium.png" alt="Imagem do Projeto 5" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    <motion.div className="md:w-[28rem] md:h-[28rem] w-[18rem] h-[18rem] rounded-md">
                        <img src="/hightower-medium.png" alt="Imagem do Projeto 6" className="shadow-lg w-full rounded-md"/>
                    </motion.div>
                    
                    
                </motion.div>
            </motion.section>
        </>
    )
}

export default Draw