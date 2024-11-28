/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion"
function Button(props) {
    return (
        <motion.a href={props.href} target="_blank">
            <motion.button
                id="al" aria-label="Botão do site"
                aria-labelledby="al"
                whileInView={props.whileInView}
                whileTap={props.whileTap} 
                whileHover={props.whileHover} 
                initial={props.initial} 
                transition={props.transition}
                animate={props.animate} 
                className={props.className}>
                {props.text} 
            </motion.button>
        </motion.a>
    )
}
export default Button