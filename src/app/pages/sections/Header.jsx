import { TiThLarge } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
import { useState } from "react";
import LiMenu from "../../Utils/LiMenu";
import Logo from "../../Utils/Logo";
import GetScroll from "../../Utils/GetScroll";

function Header(){                
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    const scrollPosition = GetScroll()
    console.log(scrollPosition)

    return (
        <>
            <header className={`z-10 sticky transition ease duration-700 delay-200 ${scrollPosition > 80 || open ? 'bg-blue-950 border-b border-b-slate-700' : 'bg-transparent border-b-transparent'}  top-0 w-full h-24 p-6 flex flex-row justify-between lg:justify-around items-center`}>
                <Logo />
                {!open && 
                    <motion.nav className="mt-0 lg:mt-0 w-full lg:w-fit">
                        <motion.ul className={`hidden items-center flex-col lg:flex lg:flex-row lg:gap-12 lg:items-center font-normal text-base lg:bg-transparent text-slate-200 bg-blue-600 transition ease duration-500`}>
                            <LiMenu  whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="hover:cursor-pointer"  />
                        </motion.ul>
                    </motion.nav>}
                <motion.button whileTap={{ scale: 0.7 }} className="w-10 h-10 flex items-center justify-center lg:hidden">{open ? <MdClose className="w-10 h-10 text-white" onClick={handleClick} /> : <TiThLarge className="w-10 h-10 text-white" onClick={handleClick} />}</motion.button>
            </header>
                {open &&
                <motion.ul className="z-20 fixed bg-black flex flex-col items-center h-screen w-full lg:hidden font-medium text-base text-white">
                    <LiMenu whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="hover:cursor-pointer w-full p-4 flex justify-center lg:border-t-0 border-t"/>
                </motion.ul>}
        </>
    )
}    
export default Header