import { animate, motion, useScroll, useTransform} from "framer-motion"

const Case = ({logo}) => {
    return (
        <motion.div className="flex flex-col p-10 bg-white/5 border border-white/5 shadow-md shadow-white/30  backdrop-blur-lg w-[150vw] h-[680px] md:w-[90vw] md:h-[780px] rounded-3xl">
            <motion.div className="flex items-center justify-center gap-8 w-full h-[6rem]  bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg">
                <motion.img src={logo} alt="" className="w-[15rem] h-full ml-4" />
                <motion.div className="w-full h-full  bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg">
                    ASSETS{/* Branding, UI/UX, Frontend... */}
                </motion.div>  
            </motion.div>

            <motion.div className="flex gap-8 w-full h-[76%]">
                <motion.div className="gap-4 flex mt-4 w-[100%] h-[100%] ">
                    <motion.div className="flex-col w-[50%] h-[100%] bg-neutral-900">
                        <motion.div src='' alt="" className="bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg w-[100%] h-[60%]">
                            IMAGEM DO PROJETO
                            <img src="" alt="" />
                        </motion.div>
                        <motion.div className="w-full h-[40%] bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg">
                            STATS DO PROJETO
                        </motion.div>
                    </motion.div>
                    <motion.div className="w-[50%] h-[100%] bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg">
                        ILUSTRAÇÕES DO PROJETO/MOCKUP
                    </motion.div>
                </motion.div>
            </motion.div>
                <motion.div className="flex flex-wrap w-full h-[12%] mt-9 gap-4 bg-black border border-white/5 shadow-lg shadow-black rounded-lg backdrop-blur-lg">
                    <h1>TEMPO DE PROJETO</h1>
                    <h1>DESCRICAO DO PROJETO</h1>
                    <h1>DESCRICAO DO PROJETO</h1>
                    <h1>DESCRICAO DO PROJETO</h1>
                </motion.div>
        </motion.div>
    );
}
 
export default Case;