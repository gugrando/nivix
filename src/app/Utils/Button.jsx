/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion"
function Button(props) {
    return (
        <motion.button 
            whileTap={props.whileTap} 
            whileHover={props.whileHover} 
            initial={props.initial} 
            transition={props.transition}
            animate={props.animate} 
            className={props.className}>
            {props.text} 
        </motion.button>
    )
}
export default Button