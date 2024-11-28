import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

function Zooming() {
    const refGeral = useRef(null)    
    const { scrollYProgress: scrollYProgress1 } = useScroll({
            target: refGeral,
            offset: ["start end", "start start"]
    })

    //REF 1
    const position = useTransform(scrollYProgress1, (pos)=>{
        return pos > 0.1540 && pos < 1 ? 'fixed' : 'relative' 
    })
    const display = useTransform(scrollYProgress1, (pos)=>{
        // console.log(pos) //Pos1
        return pos > 0.1540 ? 'flex' : 'none'
    })
    const scale = useTransform(scrollYProgress1, [0.16, 1], [2, innerWidth > 635 ? 0.75 : 1.1])
    const opacity = useTransform(scrollYProgress1, (pos)=>{
        // console.log(pos)
        return pos > 0.1540 ? 1 : 0 
    })
    const display2 = useTransform(scrollYProgress1, (pos)=>{
        // console.log(pos)
        return pos > 0 ? 'flex' : 'none'
    })
    

    //REF 2
    const position2 = useTransform(scrollYProgress1, (pos)=>{
        return pos == 1 ? 'flex' : 'hidden'
    })

    return (
        <>
            <motion.section ref={refGeral} className="bg-[#000B14] relative w-full h-screen">
                    <motion.div style={{position : position, display, opacity : opacity, display2}} className={`flex z-40 bg-gradient-to-r  top-[5rem] w-full h-screen transition-all ease duration-1000`}>
                        <motion.div className="bg-[#000B14] text-center relative flex flex-col justify-center items-center  w-full h-full pb-20 sm:pb-0">
                            <h1 className="absolute text-5xl font-bold text-white md:z-40  mb-[30rem] lg:mb-0 lg:mr-[70%]">Feita de pessoas</h1>
                            <motion.img style={{scale: scale, position2}} src="/notebook.png" alt="Imagem de um computador com imagens da Nivix" className="top-0 " />
                            <h1  className="text-center absolute text-5xl font-bold  text-white z-[-1] md:z-40  mt-[25rem] lg:mt-0 lg:ml-[70%]">Para pessoas</h1>
                        </motion.div>
                    </motion.div>
            </motion.section>
        </>
    )
}

export default Zooming