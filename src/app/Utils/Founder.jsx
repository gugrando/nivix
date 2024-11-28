import { animate, motion, useScroll, useTransform,} from "framer-motion"
import { GrInstagram } from "react-icons/gr";
import { ImBehance2 } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";


const Founder = ({name, position, src, text, igLink, bhLink, liLink, ghLink}) => {
    return (
        <>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="relative border border-neutral-800 rounded-lg flex flex-col items-center justify-center w-[24rem] h-[33rem]">
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className="z-40 gap-8 absolute flex md:flex-col justify-center h-fit w-[4rem] md:left-[-1.5rem] md:top-20 bottom-[-0.5rem] flex-row">
                        <a href={igLink} target="_blank" aria-label="link que leva para nosso instagram">
                            <GrInstagram className="text-[2.8rem] text-gray-300 hover:text-primarySt hover:cursor-pointer transition-all hover:scale-[1.1]"/>
                        </a>
                        {
                            bhLink && 
                            <a href={bhLink} target="_blank" aria-label="link que leva para nosso behance">
                                <ImBehance2 className="text-[2.8rem] text-gray-300 hover:text-primarySt hover:cursor-pointer transition-all hover:scale-[1.1]"/>
                            </a>
                        }
                        
                        {
                            ghLink && 
                            <a href={ghLink} target="_blank" aria-label="link que leva para nosso github">
                                <GrGithub className="text-[2.8rem] text-gray-300 hover:text-primarySt hover:cursor-pointer transition-all hover:scale-[1.1]"/>
                            </a>
                        }
                        {
                            liLink && 
                            <a href={liLink} target="_blank" aria-label="link que leva para nosso linkedin">
                                <GrLinkedin className="text-[2.8rem] text-gray-300 hover:text-primarySt hover:cursor-pointer transition-all hover:scale-[1.1]"/>
                            </a>
                        }
                    </motion.div>
                    
                    <motion.div layoutId="modal" className="flex flex-col items-center w-[22rem] h-[30rem] border border-neutral-800 rounded-lg">
                        <motion.img alt='Imagem de um fundador' src={src} className="w-full h-[22rem] rounded-lg"></motion.img>
                        <motion.div className="flex flex-col items-center justify-center w-[22rem] h-[8rem]">
                            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 90 }} className="text-4xl font-bold text-white">{name}</motion.h1>
                            <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 90 }} className="text-lg font-normal text-gray-400">{position}</motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
        </>
    );
}
 
export default Founder;