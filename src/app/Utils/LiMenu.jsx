/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import Button from "./Button.jsx";
function LiMenu(props) {
    const menuItems = [{name: 'Home'}, {name: 'About'}, {name: 'Cases'}, {name: 'Contact'}, {name: <Button text="Get Started" animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 20 }} whileHover={{ scale: 1.02, borderColor: '#2563eb' }} whileTap={{ scale: 0.99 }} className="w-42 rounded-full border border-slate-600 blue  text-white font-normal px-12 py-3 hover:cursor-pointer" />}]
    return (
        <>
            {menuItems.map((item, index) => (
                <motion.li key={index} whileTap={props.whileTap} whileHover={props.whileHover} initial={props.initial} animate={props.animate} transition={props.transition} className={props.className}>
                    <a className="hover:text-blue-500 ease-linear duration-150" href={item.link}>{item.name}</a>
                </motion.li>
            ))}
        </>
    )
}
export default LiMenu