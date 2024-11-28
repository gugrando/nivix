import { motion } from "framer-motion"
import Founder from "../../Utils/Founder";
import Button from "../../Utils/Button";
import { Link } from "react-router-dom";
import Sec from "../../Utils/Sec";

const Founders = () => {
    return (
        <>
            <section className="w-full flex flex-col items-center bg-gradient-to-br bg-[#000B14]">
                <motion.div className=" w-full flex justify-center">
                    <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} className="z-40 mb-12 md:mt-20 text-4xl md:text-6xl font-bold text-white">
                        <Sec text={"Nossa Equipe"}/>
                        Conheça nossos líderes
                    </motion.h1>
                </motion.div>
                <motion.section className="flex flex-wrap gap-20 items-center justify-center w-full h-fit">
                    <Founder name={"Danilo Felizardo"} position={"Co-Founder & Sênior Designer"} src={"/pessoas.png"} igLink={"https://www.instagram.com/odanilofelizardo/"} bhLink={"https://www.behance.com/danilofelizardo"} liLink={"https://www.linkedin.com/in/danilo-felizardo/"} ghLink={""}/>
                    <Founder name={"Gustavo Grando"} position={"Co-Founder & CTO"} src={"/pessoas.png"} igLink={"https://www.instagram.com/oguvieira_/"} bhLink={""} ghLink={"https://www.github.com/gugrando"} liLink={"https://www.linkedin.com/in/gugrando/"} />
                    <Founder name={"Everthy Bonfim"} position={"Co-Founder & Gestor de Tráfego"} src={"/pessoas.png"} igLink={"https://www.instagram.com/everthy_bonfim/"} bhLink={""} liLink={""} ghLink={""}/>
                </motion.section>
                <Link to="/sobre">
                    <Button href="nivix.co/sobre" text="Veja mais sobre nós" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.90 }} className="mb-10 mt-8 w-42 border border-primarySt rounded-full text-white font-normal px-14 py-4 hover:border-blue-500 bg-primarySt"/>
                </Link>
            </section>
        </> 
    );
}
 
export default Founders;