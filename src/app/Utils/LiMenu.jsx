import { motion } from "framer-motion";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function LiMenu({ 
    whileTap, 
    whileHover, 
    initial, 
    animate, 
    transition, 
    className, 
    onMenuClick 
}) {
    const menuItems = [
        { name: "Início", link: "/" },
        { name: "Projetos", link: "/projetos" },
        { name: "Quem somos", link: "/sobre" },
        // { name: "Metodologia", link: "" },
        {
            name: (
                    <Button
                        href="https://bit.ly/contato-nivix"
                        text="Fale Conosco"
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-42 rounded-full border border-slate-500 hover:border-blue-600 text-white font-normal px-12 py-3"
                    />
            ),
            link: "https://bit.ly/contato-nivix",
        },
    ];

    return (
        <>
            {menuItems.map((item, index) => (
                <motion.li
                    key={index}
                    whileTap={whileTap}
                    whileHover={whileHover}
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    className={className}
                >

                    {item.name === "Metodologia" ? (
                        <a href="/#metodologia" className="hover:text-blue-500 ease-linear duration-150">
                            {item.name}
                        </a>
                    ): (
                        <Link
                        onClick={onMenuClick} // Executa a função ao clicar
                        className="hover:text-blue-500 ease-linear duration-150"
                        to={item.link}
                    >
                        {item.name}
                    </Link>
                    )}
                </motion.li>
            ))}
        </>
    );
}

export default LiMenu;