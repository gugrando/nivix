import { motion} from "framer-motion"
import { FaChevronCircleUp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <motion.footer className="pt-8 bg-[#000B14] w-full h-fit flex flex-col items-center text-white mt-20">
                <motion.div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-between w-full px-8 md:px-0 md:w-2/3 h-fit">
                    <motion.div className="w-full">
                        <a href="#top" aria-label="logo que leva para o inicio da página">
                            <img src="/nivixlogobranca.webp" className="relative w-fit right-4 hover:scale-105 transition-all hover:cursor-pointer" alt="" />
                        </a>
                        <motion.p className="max-w-80 mt-2 md:mt-4 text-gray-400">
                            Fundada para revolucionar, a sua evoluçõa é a nossa.
                        </motion.p>
                        <motion.p className="max-w-80 mt-2 md:mt-4 text-gray-400">
                            Acredite em seus sonhos, eles são possíveis!
                        </motion.p>
                    </motion.div>
                    <motion.div className="w-full ">
                        <h1 className="text-2xl font-bold">Navegue</h1>
                        <ul className="md:mt-4 mt-2 w-fit">
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <Link to="/#top" aria-label="link que leva para a página inicial">
                                    Página inícial
                                </Link>
                            </li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <Link to="/sobre" aria-label="link que leva para a página sobre">
                                    Quem somos    
                                </Link>
                            </li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <Link to="/projetos" aria-label="link que leva para a página de projetos">
                                    Nossos projetos
                                </Link>
                            </li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <a href="/#metodologia" aria-label="link que leva para a sessão de metodologia">
                                    Metodologia
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="w-full">
                        <h1 className="text-2xl font-bold">Duvidas</h1>
                        <ul className="mt-4 w-fit">
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <a href="https://www.bit.ly/contato-nivix" aria-label="link que leva para nosso whatsapp de contato" target="_blank">
                                    Fale conosco
                                </a>
                            </li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">Carreira</li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <Link to="/termos-de-uso" aria-label="link que leva para os termos de uso">
                                    Temos de uso
                                </Link>
                            </li>
                            <li className="mt-1 first:mt-0 text-gray-400 hover:cursor-pointer hover:text-primarySt hover:scale-[1.01] transition-all">
                                <Link to="/politica-de-privacidade" aria-label="link que leva para a página sobre política de privacidade">
                                    Política de privacidade
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div className="w-full md:p-0">
                        <h1 className="text-2xl text-start font-bold">Redes Sociais</h1>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.instagram.com/nivix.co" target="_blank" aria-label="link que leva para nosso instagram">
                                <GrInstagram className="text-2xl hover:cursor-pointer hover:text-primarySt transition-all" />
                            </a>
                            <a href="mailto:contato@nivix.co" aria-label="link que leva para nosso email">
                                <GrMail className="text-2xl hover:cursor-pointer hover:text-primarySt transition-all" />
                            </a>
                            <a href="https://www.linkedin.com/company/nivix-brasil/" target="_blank" aria-label="link que leva para nosso linkedin">
                                <GrLinkedin className="text-2xl hover:cursor-pointer hover:text-primarySt transition-all" />
                            </a>
                            <a href="https://bit.ly/contato-nivix" target="_blank" aria-label="link que leva para nosso whatsapp">
                                <ImWhatsapp className="text-2xl hover:cursor-pointer hover:text-primarySt transition-all" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex flex-col md:flex-row justify-between items-center w-full py-8 md:w-2/3 h-fit mt-8 border-t border-t-white/20">
                    <p className="text-center">© 2025 Nivix Tecnologia - Todos os direitos reservados.</p>
                    <a href="#top" aria-label="link que leva para o topo da pagina novamente" className="flex hover:cursor-pointer hover:text-primarySt justify-center items-center h-4 gap-2 transition-all">
                        <div className="w-fit hover:cursor-pointer flex gap-2">
                            <FaChevronCircleUp className="hover:cursor-pointer  text-2xl mt-9 md:mt-0"/>
                            <p className="hover:cursor-pointer  text-md font-semibold mt-9 md:mt-0">Voltar ao topo</p>
                        </div>
                    </a>
                </motion.div>
            </motion.footer>               
        </>
    );
}
 
export default Footer;