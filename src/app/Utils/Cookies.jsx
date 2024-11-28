import { useCookies } from "react-cookie";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export default function Cookies() {
    const [cookies, setCookie] = useCookies(['cookieConsent']);
    const giveConsent = () => {
        setCookie('cookieConsent', true, { path: '/' });
    }
    return (
        <motion.div className="w-full flex justify-center">
            <motion.div className="mb-4 rounded-lg z-50 fixed bottom-0 flex flex-col md:flex-row justify-center items-center w-fit p-8 h-fit gap-4 md:gap-8 bg-blue-300">
                <p>
                    Esse site utiliza cookies para melhorar a experiência do usuário. Ao navegar em nosso site, concorda com o uso e coleta de cookies.
                    {' '}
                    <span>
                        <Link to="/politica-de-privacidade" className="text-blue-600 underline">Saiba mais</Link> 
                    </span>
                </p>
                <button onClick={giveConsent} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Aceitar
                </button>
            </motion.div>
        </motion.div>
    )
}