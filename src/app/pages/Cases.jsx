import { motion } from "framer-motion";
import Case from "../Utils/Case";
import ScrollToTop from "../Utils/ScrollToTop";

const Cases = () => {
    ScrollToTop();
    const projects = [
        { name: "Craft Sushi", description: "Descrição do Projeto 1", image: "", miniature: "/craft-miniature.png" },
        { name: "Ita Concessionária", description: "Descrição do Projeto 1", image: "", miniature: "/ita-miniature.png" },
        { name: "Hightower Construtora", description: "Descrição do Projeto 1", image: "", miniature: "/hightower-miniature.png" },
        { name: "Cately Estética", description: "Descrição do Projeto 1", image: "", miniature: "/cately-miniature.png" },
        { name: "Serralheria Vieira", description: "Descrição do Projeto 1", image: "", miniature: "/vieira-miniature.png" },
        { name: "Santin Moda", description: "Descrição do Projeto 1", image: "", miniature: "/santin-miniature.png" },
        { name: "Silent", description: "Descrição do Projeto 1", image: "", miniature: "/silent-miniature.png" },
        { name: "Too Burger", description: "Descrição do Projeto 1", image: "", miniature: "/tooburger-miniature.png" },
        { name: "Correia Sportclub", description: "Descrição do Projeto 1", image: "", miniature: "/correiasport-miniature.png" },
        { name: "JK Concessionária", description: "Descrição do Projeto 1", image: "", miniature: "/jkconcessionaria-miniatura.png" },
        { name: "Masotto", description: "Descrição do Projeto 1", image: "", miniature: "/masotto-miniature.png" },
        { name: "Avante", description: "Descrição do Projeto 1", image: "", miniature: "/avante-miniature.png" },
        { name: "Rota M3", description: "Descrição do Projeto 1", image: "", miniature: "/rotam3-miniature.png" },
        { name: "Dropit", description: "Descrição do Projeto 1", image: "", miniature: "/dropit-miniature.png" },
    ];

    return (
        <motion.section className="w-full h-fit">
            <motion.div className="mt-40 w-full h-fit flex flex-col items-center">
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    className="text-4xl text-center md:text-6xl text-white font-bold"
                >
                    O <span className="text-primarySt">Sucesso</span> faz parte da nossa história.
                </motion.h1>
                <motion.p
                    className="md:max-w-5xl max-w-11/12 text-lg text-center text-gray-400 font-normal"
                >
                    Confira os projetos que marcaram nossa trajetória e inspire-se com nossos cases de
                    sucesso.
                </motion.p>
                <motion.button
                    className="mb-10 mt-12 w-42 border border-primarySt rounded-full text-white font-normal px-12 py-3 hover:border-blue-500 bg-primarySt hover:bg-blue-700 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Marque uma reunião
                </motion.button>
            </motion.div>
            <motion.div className="lg:px-40 w-full h-fit flex flex-col items-center">
                <motion.div className="py-8 flex justify-center flex-wrap gap-12 w-full h-fit bg-gray-700/5 rounded-lg">
                    {projects.map((project, index) => (
                        <Case
                            key={index}
                            projectName={project.name}
                            projectDescription={project.description}
                            projectMiniature={project.miniature}
                            projectImage={project.image}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Cases;