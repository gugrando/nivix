import { motion } from "framer-motion"


const Partners = () => {
    const imagesUpper = ["/01.svg", "/02.svg", "/03.svg", "/04.svg", "/05.svg", "/06.svg", "/07.svg", "/08.svg","/09.svg", "/10.svg","/11.svg",]
    const imagesLower = ["/12.svg", "/13.svg", "/14.svg", "/15.svg", "/16.svg", "/17.svg", "/18.svg", "/19.svg","/20.svg", "/21.svg","/22.svg",]
    return (

        <>
            <motion.div className='container mx-auto mt-12 bg-[#000B14]'>
                {/* <h1 className='w-full text-center text-xl text-gray-400 mb-4'>Parceiros que confiam em nós</h1> */}
                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 2}} className='flex myGradient'>
                    <motion.div className='opacity-50 flex flex-shrink-0 gap-20 mb-[-2rem]' initial={{x: 0}} animate={{x: '-100%'}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
                        {imagesUpper.map((image, index) => (
                            <motion.img className='h-24 w-48' src={image} key={index} alt='logo de um cliente na sequencia de outro'></motion.img>
                        ))}
                    </motion.div>
                    <motion.div className='opacity-50 flex flex-shrink-0 gap-20 mb-[-2rem]' initial={{x: 0}} animate={{x: '-100%'}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
                        {imagesUpper.map((image, index) => (
                            <motion.img className='h-24 w-48' src={image} key={index} alt='logo de um cliente na sequencia de outro'></motion.img>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 2}} className='flex myGradient'>
                    <motion.div className='opacity-50 flex flex-shrink-0 gap-20' initial={{x: '-100%'}} animate={{x: 0}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
                        {imagesLower.map((image, index) => (
                            <motion.img className='h-24 w-48' src={image} key={index} alt='logo de um cliente na sequencia de outro'></motion.img>
                        ))}
                    </motion.div>
                    <motion.div className='opacity-50 flex flex-shrink-0 gap-20' initial={{x: '-100%'}} animate={{x: 0}} transition={{duration: 20, repeat: Infinity, ease: "linear"}}>
                        {imagesLower.map((image, index) => (
                            <motion.img className='h-24 w-48' src={image} key={index} alt='logo de um cliente na sequencia de outro'></motion.img>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
 
export default Partners;