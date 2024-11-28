import { motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import Button from "../../Utils/Button"

function Hero() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.29], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.29], [1, 0.8])
    const position = useTransform(scrollYProgress, (pos)=>{
        return pos === 1 ? 'relative' : 'fixed'
    })

    return (
        <>
            <motion.section  ref={targetRef} className="bg-[#000B14] z-10 relative h-screen md:mb-[-30rem] mb-[-22rem]  text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40">
                <motion.div style={{scale: scale, position, opacity}} className="z-10 mb-40 md:pt-24 pt-8 md:pl-28 pl-2 md:pr-28 pr-2 flex flex-col w-full items-center">  
                    <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0, duration: 0.5 }} className="px-6 max-w-3xl md:text-5xl text-4xl text-center text-white font-extrabold">Somos a evolução da sua marca, posicione-se e crie!</motion.h1>
                    <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="max-w-2xl text-center text-white p-4">Somos profissionais em estratégias digitais e vamos auxiliar na diferenciação do seu negócio em um mercado que se torna cada vez mais desafiador e avançado.</motion.p>
                    <a className="mb-10 mt-8 h-fit w-fit" href="https://bit.ly/contato-nivix" target="_blank">
                        <Button id="al" aria-label="Botão marcar reunião" text="Marque uma reunião" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.90 }} className="w-42 border border-primarySt rounded-full text-white font-normal px-12 py-3 hover:border-blue-500 bg-primarySt hover:bg-blue-700 transition-all"/>
                    </a>
                    <img src="/downarrow.png" className="animate-bounce mt-8" alt="Seta para baixo animada para cima e para baixo" />
                    <img src="/draw.webp" className="mt-[-3rem] md:mt-0" alt="Desenho de rabisco em nó, branco" />
                </motion.div>
            </motion.section>   
        </>
    )
}
export default Hero