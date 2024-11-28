import { motion } from "framer-motion"
import Sec from "../../Utils/Sec";

const ProcessInfo = () => {
    return (
        <>
            <motion.section id='metodologia' className="md:px-[8rem] pt-40 w-full h-fit flex flex-col items-center bg-[#000B14]">
                <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} className="lg:w-[40%] w-[90%] px-6 text-4xl text-center md:text-5xl text-white font-bold">
                    <Sec text={'Estratégia e metodologia'}/>
                    Estratégia personalizada e acompanhada de perto
                </motion.h1>
                <motion.span whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} content="" className="mt-12 w-36 h-2 border-t-blue-500 border-t-4"></motion.span>
                <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} className="px-8 mt-6 max-w-4xl text-xl text-center text-gray-400 font-normal">
                    Trabalhamos junto com você do início ao fim do projeto, para superarmos seus objetivos e resultados. Seguimos uma metodologia clara e sem firulas, com o foco em resultados.
                </motion.p>

                <motion.div className="relative md:gap-12 gap-4 mt-16 flex flex-col md:flex-row  w-fit justify-center">
                    <motion.img whileInView={{opacity: 1, rotate: 360, transition: { duration: 1.2 }}} initial={{opacity: 0, rotate: 0 }} src="public/circlearrow.svg"></motion.img>
                    <motion.img whileInView={{opacity: 1, rotate: 360, transition: { duration: 1.2 }}} initial={{opacity: 0, rotate: 0 }} src="public/circlearrow2.svg"></motion.img>
                
                    <motion.div whileInView={{opacity: 1, transition: { delay: 1.2 }}} initial={{opacity: 0}} className="absolute md:top-[44%] md:left-[46.3%] top-[36%] left-[11%] flex flex-col items-center w-fit h-fit">
                        <motion.img className="w-12" src="/Group 5.svg"></motion.img>
                        <p className="text-white text-sm">Monetização</p>
                    </motion.div>
                    <motion.div whileInView={{opacity: 1, transition: { delay: 1.3 }}} initial={{opacity: 0}} className="absolute md:top-[77%] md:left-[4%] top-[1%] left-[24%] flex flex-col items-center w-fit h-fit">
                        <motion.img className="w-12" src="public/Group 12.svg"></motion.img>
                        <p className="text-white text-sm">Aquisição</p>
                    </motion.div>
                    <motion.div whileInView={{opacity: 1, transition: { delay: 1.4 }}} initial={{opacity: 0}} className="absolute md:top-[0%] md:left-[10%] top-[20%] left-[88%] flex flex-col items-center w-fit h-fit">
                        <motion.img className="w-12" src="/Group 11.svg"></motion.img>
                        <p className="text-white text-sm">Engajamento</p>
                    </motion.div>
                    <motion.div whileInView={{opacity: 1, transition: { delay: 1.5 }}} initial={{opacity: 0}} className="absolute md:top-[35%] md:left-[96%] top-[73%] left-[-4%] flex flex-col items-center w-fit h-fit">
                        <motion.img className="w-12" src="/Vector.svg"></motion.img>
                        <p className="text-white text-sm">Retenção</p>
                    </motion.div>
                </motion.div>

                <motion.div whileInView={{opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="mt-20 flex flex-wrap lg:w-8/12 w-[90%] justify-center gap-8">
                    <motion.div className="flex flex-col pt-8 px-8 w-[14rem] h-[10rem] bg-white rounded-lg">
                        <motion.h1 className="text-xl font-bold text-blue-500">Aquisição</motion.h1>
                        <motion.p className="mt-1 text-gray-700">
                            Captar o interesse do publico alvo.
                        </motion.p>
                    </motion.div> 
                    
                    <motion.div className="flex flex-col pt-8 px-8 w-[14rem] h-[10rem] bg-white rounded-lg">
                        <motion.h1 className="text-xl font-bold text-blue-500">Engajamento</motion.h1>
                        <motion.p className="mt-1 text-gray-700">
                            Engajar o publico alvo e gerar conciência de valor.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex flex-col pt-8 px-8 w-[14rem] h-[10rem] bg-white rounded-lg">
                        <motion.h1 className="text-xl font-bold text-blue-500">Monetização</motion.h1>
                        <motion.p className="mt-1 text-gray-700">
                            Converter o publico engajado em clientes recorrentes.
                        </motion.p>
                    </motion.div>

                    <motion.div  className="flex flex-col pt-8 px-8 w-[14rem] h-[10rem] bg-white rounded-lg">
                        <motion.h1 className="text-xl font-bold text-blue-500">Retenção</motion.h1>
                        <motion.p className="mt-1 text-gray-700">
                            Gerar valor no serviço e reter os clientes.
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} className="text-white mt-8 text-lg">
                    Basta repetir esse ciclo do <b>Sucesso.</b>
                </motion.p>
            </motion.section>
        </>
    );
}
 
export default ProcessInfo;