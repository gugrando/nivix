import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Button from "../Utils/Button";

const CaseInfo = () => {
    const location = useLocation();
    const { projectName, projectDescription, projectImage } = location.state || {};

    return (
        <motion.section className="w-full h-fit">
            <motion.div className="mt-40 w-full h-fit flex flex-col items-center">
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    className="text-4xl text-center md:text-6xl text-white font-bold"
                >
                    {projectName}
                </motion.h1>
                <motion.p whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }} className="md:max-w-5xl max-w-11/12 text-lg text-center text-gray-400 font-normal">
                    {projectDescription}
                </motion.p>
                <Button
                    text="Marque uma reunião"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.90 }}
                    className="mt-12 w-42 border border-primarySt rounded-full text-white font-normal px-12 py-3 hover:border-blue-500 bg-primarySt hover:bg-blue-700 transition-all"
                />
                <motion.p className="text-md text-center mt-2 mb-10 text-gray-400/30 font-normal transition-all">
                    Seja você um case de sucesso
                </motion.p>
            </motion.div>
            <motion.div className="lg:px-40 w-full h-fit flex flex-col items-center">
                <motion.img src={projectImage} alt={projectName} className="w-full h-fit rounded-lg" />
            </motion.div>
        </motion.section>
    );
};

export default CaseInfo;
