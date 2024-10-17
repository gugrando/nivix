import { motion} from "framer-motion"
import Button from "../../Utils/Button"
import CaseSlide from "../../components/CasesSlide"
function Welcome() {
    return (
        <>
            <motion.section className=" p-28 flex flex-col w-full items-center">
                <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0, duration: 0.5 }} className="max-w-3xl text-5xl text-center text-white font-extrabold">Somos a evolução da sua marca, posicione-se e crie!</motion.h1>
                <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="max-w-2xl text-center text-white p-4">Nós somos especialistas em posicionamento digital, e vamos te ajudar a diferenciar o seu negócio em um mercado que vem se tornando cada vez mais competitivo e sofisticado.</motion.p>
                <Button text="Marque uma reunião" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.90 }} className="w-42 border border-slate-500 rounded-full text-white font-normal px-12 py-3 hover:border-blue-600"/>
                {/* <span>
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g id="Scroll"><g id="Group"><g id="Group_2"><path id="Path" fillRule="evenodd" clipRule="evenodd" d="M12 17V17C9.05396 17 6.64296 14.589 6.64296 11.643V7.357C6.64296 4.411 9.05396 2 12 2V2C14.946 2 17.357 4.411 17.357 7.357V11.643C17.357 14.589 14.946 17 12 17Z" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path className="animate-bounce" id="Arrow" d="M8.99995 20L12 22L15 20" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path id="Path_2" d="M12 6.28589V8.42889" stroke="#00AAFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></g></g></svg>
                </span> */}
            </motion.section>
            <CaseSlide />
        </>
    )
}
export default Welcome