import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Case = ({ projectName, projectDescription, projectImage, projectMiniature }) => {
    return (
        <Link 
            to="/caseInfo" 
            state={{ projectName, projectDescription, projectImage }} // Passa as props via state
        >
            <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 * Math.random() } }}
                className="md:w-[25rem] md:h-[25rem] bg-gray-700 rounded-lg hover:cursor-pointer"
            >
                {/* Miniatura do case */}
                <img src={projectMiniature} alt={projectName} className="w-full h-full object-cover rounded-lg hover:cursor-pointer" />
            </motion.div>
        </Link>
    );
};

export default Case;
