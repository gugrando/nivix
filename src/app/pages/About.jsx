import { motion } from "framer-motion"
import ScrollToTop from "../Utils/ScrollToTop";

const About = () => {
    ScrollToTop();
    return (
        <>
            <motion.section className="w-full h-fit overflow-x-clip">
                <motion.div className="mt-40 w-full h-fit flex flex-col items-center">
                    <motion.h1
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                        initial={{ opacity: 0, x: -200 }}
                        className="text-4xl text-center md:text-6xl text-white font-bold"
                    >
                        Uma equipe de <span className="text-primarySt">talentos</span>, focada em soluções.
                    </motion.h1>
                    <motion.p
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                        initial={{ opacity: 0, x: -200 }}

                        className="md:max-w-5xl max-w-11/12 text-lg text-center text-gray-400 font-normal"
                    >
                        Preparada para atende-los, e fazer o serviço proposto com maestria, garantimos excelencia na escolha de nosso time!
                    </motion.p>
                    <a href="https://bit.ly/contato-nivix" target="_blank"> 
                        <motion.button
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            className="mb-10 mt-12 w-42 border border-primarySt rounded-full text-white font-normal px-12 py-3 hover:border-blue-500 bg-primarySt hover:bg-blue-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Marque uma reunião
                        </motion.button>
                    </a>
                </motion.div>
                <motion.div className="w-full h-fit md:px-16 mt-32">
                    <motion.div className="flex flex-col lg:flex-row items-center justify-center lg:items-start w-full h-fit gap-12">
                        <motion.div className="h-[33rem] flex text-start flex-col items-start justify-center">
                            <motion.h2 whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }} initial={{ opacity: 0, x: -80 }} className="w-full text-2xl md:text-4xl text-center md:text-start text-white font-bold">
                                Breve história da Nivix
                            </motion.h2>
                            <motion.p whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }} initial={{ opacity: 0, x: -80 }} className="text-md text-gray-400 font-normal md:max-w-[40rem] mt-8 text-center sm:text-start">
                            A Nivix nasceu em 2020, fruto da união de três amigos com habilidades complementares e um sonho em comum: criar algo inovador. Gustavo, um programador apaixonado por tecnologia, Danilo, um designer criativo com visão artística, e Everthy, um gestor de tráfego estratégico, decidiram unir forças para construir uma agência que oferecesse mais do que serviços, mas uma verdadeira renovação para seus clientes.
                            </motion.p>
                            <motion.p whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }} initial={{ opacity: 0, x: -80 }} className="text-md text-gray-400 font-normal md:max-w-[30rem] mt-8 text-center sm:text-start">
                            Com o objetivo de ser um &quote;novo fôlego&quote; no mercado, a Nivix trouxe soluções integradas, criatividade, e foco em resultados, ajudando empresas a transformarem suas ideias em sucesso. O espírito colaborativo e a dedicação ao crescimento sustentável logo se tornaram os pilares que definem a essência da agência.
                            </motion.p>
                            <motion.p whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }} initial={{ opacity: 0, x: -80 }} className="text-md font-bold italic text-primarySt md:max-w-[30rem] mt-20 text-center w-full sm:text-start">
                            &quot;onde criatividade, estratégia e inovação se encontram para transformar ideias em resultados&quot;
                            </motion.p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0, transition: { delay: .6 } }} initial={{ opacity: 0, x: 80 }} className=" flex justify-center md:w-fit w-fit h-fit">
                            <div className="md:w-[33rem] md:h-[33rem] w-[20rem] h-[20rem] bg-gray-700 rounded-lg mt-8 md:mt-0"></div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}
 
export default About;