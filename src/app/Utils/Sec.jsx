import { animate, motion, useScroll, useTransform,} from "framer-motion"

const Sec = ({text}) => {
    return (
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} className='text-lg text-center lg:text-start font-normal text-gray-400'>
            <span className='mr-2 inline-block w-[1rem] h-[1rem] border-2 border-primarySt rounded-full' content=""></span>
            {text}
        </motion.p>
    );
}
 
export default Sec;