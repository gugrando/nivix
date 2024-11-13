

import { animate, motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "../../Utils/AnimatedCounter"
import { FcBullish } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import { FcSerialTasks } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";



function Process() {
    const lineRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start end", "end end"]
    })
    const value = useTransform(scrollYProgress, (pos)=>{
        console.log(pos)
        return pos
    })
    const height = useTransform(scrollYProgress, (pos)=>{
        const windowidth = window.innerWidth
        if(windowidth > 780){
            return pos * 1400
        }else{
            return pos * 2330
        }
    })

    
    
    return (
        <>
            <motion.section ref={lineRef} className="flex justify-center relative bg-black w-full h-fit">
                {/* LINE */}
                <motion.div style={{height: height}} className="relative flex justify-center ml-[3rem] lg:ml-[25rem] left-0 w-[6px] bg-gray-700">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="border-black border-8 absolute w-[3.7rem] h-[3.7rem] mt-[10rem] bg-blue-700 rounded-full"></motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="border-black border-8 absolute w-[3.7rem] h-[3.7rem] mt-[42rem] bg-red-700 rounded-full">
                        <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} src="src/assets/rocket.png" alt="" />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="border-black border-8 absolute w-[3.7rem] h-[3.7rem] mt-[84rem] bg-green-700 rounded-full"></motion.div>

                </motion.div>

                {/* Main BOX */}
                <motion.div className="flex flex-col items-end w-11/12 h-full bg-black">
                    {/* 1st BOX */}
                    <motion.div className="pl-6 gap-6 md:pl-0 flex flex-col items-start w-11/12 h-fit ">
                        <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pr-2 md:pr-0 text-white text-start max-w-[100%] lg:max-w-[60%] font-semibold text-4xl md:text-5xl mt-[10.4rem]">Estratégia personalizada e acompanhada de perto.</motion.h1>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="text-gray-500 text-start max-w-[100%] lg:max-w-[40%] font-normal text-lg">Trabalhamos do início ao fim ao seu lado, com uma estratégia personalizada especialmente para seu negócio para superar suas metas e principalmente os desafios no meio do caminho, <b>JUNTOS</b>.</motion.p>
                        <motion.div  className="flex flex-wrap justify-start gap-6 w-full h-fit ">
                            <motion.span whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: 20 }} className="w-[4rem] h-[4rem] rounded-lg">
                                <FcBullish className="w-full h-full text-white" />
                            </motion.span>
                            <motion.span whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: 20 }} className="w-[4rem] h-[4rem] rounded-lg">
                                <FcCommandLine className="w-full h-full text-white" />
                            </motion.span>
                            <motion.span whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: 20 }} className="w-[4rem] h-[4rem] rounded-lg">
                                <FcSerialTasks className="w-full h-full text-white" />
                            </motion.span>
                            <motion.span whileInView={{ opacity: 1, y: 0}} initial={{ opacity: 0, y: 20 }} className="w-[4rem] h-[4rem] rounded-lg">
                                <FcCurrencyExchange className="w-full h-full text-white" />
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="mt-6 md:mt-[12rem] w-11/12 h-fit flex flex-col md:flex-row justify-start ">
                        <motion.div className="border-b md:border-b-0 md:border-r border-gray-600 gap-3 flex flex-col items-center justify-center md:justify-start w-[18rem] h-[13rem]">
                            <div className="flex items-center">
                                <AnimatedCounter classes={'text-5xl text-white font-bold'} from={0} to={52} animationOps={{duration: 1.5, ease: "ease"}} />
                                <span className="text-5xl text-white font-bold">%</span>
                            </div>
                            <p className="text-gray-500 text-center max-w-[14rem]">No aumento de captação e conversão de Leads para nossos parceiros.</p>
                        </motion.div>

                        <motion.div className="border-b md:border-b-0 md:border-r border-gray-600 gap-3 flex flex-col items-center justify-center md:justify-start w-[18rem] h-[13rem]">
                            <div className="flex items-center">
                                <AnimatedCounter classes={'text-5xl text-white font-bold'} from={0} to={67} animationOps={{duration: 1.5, ease: "ease"}} />
                                <span className="text-5xl text-white font-bold">%</span>
                            </div>
                            <p className="text-gray-500 text-center max-w-[14rem]">No aumento de produtividade e eficiência dos times do negócio de nossos parceiros.</p>
                        </motion.div>

                        <motion.div className="border-b md:border-b-0 md:border-r border-gray-600 gap-3 flex flex-col items-center justify-center md:justify-start  w-[18rem] h-[13rem]">
                            <div className="flex items-center">
                                <AnimatedCounter classes={'text-5xl text-white font-bold'} from={0} to={174} animationOps={{duration: 1.5, ease: "ease"}} />
                                <span className="text-5xl text-white font-bold">%</span>
                            </div>
                            <p className="text-gray-500 text-center max-w-[14rem]">Aumento do engajamento das redes sociais e base de publico.</p>
                        </motion.div>
                    </motion.div>


                    <motion.div className="flex flex-col items-start w-11/12 h-fit md:mt-[10rem] mt-[5rem] ">
                        <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="text-white pr-3 md:pr-0 text-start max-w-[100%] lg:max-w-[60%] font-semibold text-2xl md:text-4xl">
                            Um Ecossistema 360° para seu sucesso
                        </motion.h1>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pr-2 md:pr-0 my-4 text-gray-500 text-start max-w-[100%] lg:max-w-[50%] font-normal text-lg">
                            Post bonito não vende, estrategia sem qualidade te quebra, sistema ultrapassado não gera autoridade. Trabalhe os 3 pilares JUNTOS para extrapolar seus resultados!
                        </motion.p>
                        <motion.div className="w-11/12 h-fit flex gap-8 flex-wrap justify-start mt-9">
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="w-[19rem] h-[15rem] md:w-[24rem] md:h-[19rem] rounded-3xl border bg-neutral-950 border-gray-900">
                                <motion.div className="border-l-4 border-blue-600 mt-4 md:mt-8 w-full h-[4rem]">
                                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} src="src/assets/rocket.png" className="ml-8 w-[4rem] h-[4rem]"/>
                                </motion.div>
                                
                                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 md:mt-14 text-start text-blue-600 font-extrabold text-3xl">
                                    Tecnologia
                                </motion.h1>
                                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 text-gray-500">
                                    Modernize o seu negócio com tecnologia de ponta, aumente a eficiencia da sua equipe, e conecte todas pontas do seu processo até o cliente.
                                </motion.p>
                            </motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="w-[19rem] h-[15rem] md:w-[24rem] md:h-[19rem] rounded-3xl border bg-neutral-950 border-gray-900">
                                <motion.div className="border-l-4 border-blue-600 mt-4 md:mt-8 w-full h-[4rem]">
                                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} src="src/assets/rocket.png" className="ml-8 w-[4rem] h-[4rem]"/>
                                </motion.div>
                                
                                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 md:mt-14 text-start text-blue-600 font-extrabold text-3xl">
                                    Estratégia
                                </motion.h1>
                                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 text-gray-500">
                                    Estratégias de verdade, sem papo furado, estrutura de valores, e um plano de crescimento real para o seu negócio.
                                </motion.p>
                            </motion.div>
                            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="w-[19rem] h-[15rem] md:w-[24rem] md:h-[19rem] rounded-3xl border bg-neutral-950 border-gray-900">
                                <motion.div className="border-l-4 border-blue-600 mt-4 md:mt-8 w-full h-[4rem]">
                                    <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} src="src/assets/rocket.png" className="ml-8 w-[4rem] h-[4rem]"/>
                                </motion.div>
                                
                                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 md:mt-14 text-start text-blue-600 font-extrabold text-3xl">
                                    Design
                                </motion.h1>
                                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="pl-8 mt-2 text-gray-500">
                                    Alinhe todo seu negócio e processo com o que você quer transmitir, através do Design você vai se conectar com o seu publico.
                                </motion.p>
                            </motion.div>
                            
                        </motion.div>
                    </motion.div>

                    {/* 2nd BOX */}
                    
                </motion.div>
            </motion.section>
        </>
    )
}

export default Process