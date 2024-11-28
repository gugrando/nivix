import { motion } from "framer-motion";
import ScrollToTop from "../../Utils/ScrollToTop"; 

function TermosDeUso() {
    ScrollToTop()
    return (
        <motion.section className="w-full h-fit">
            <motion.div className="mt-40 w-full h-fit flex flex-col items-center">
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    className="text-4xl text-center md:text-6xl text-white font-bold"
                >
                    Termos de uso
                </motion.h1>
                <motion.p
                    className="md:max-w-5xl max-w-11/12 text-lg text-center text-gray-400 font-normal"
                >
                    Leia com atenção.
                </motion.p>
            </motion.div>

            <motion.div className="py-10 bg-white w-full h-fit mt-20 flex flex-col lg:flex-row">
                <motion.div className="md:sticky md:top-32 lg:w-1/3 w-full h-fit flex flex-col items-center">
                    <ol className="flex flex-col gap-4">
                        <h1 className="text-lg text-start md:text-xl text-black font-bold">Tópicos</h1>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Termos</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Uso de licença</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Isenção de responsabilidade</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Limitações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Precisão dos materiais</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Links</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Modificações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Lei aplicável</li>
                    </ol>
                </motion.div>

                <motion.div className="lg:px-20 flex flex-col w-full h-fit">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Termos
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Uso de licença
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Isenção de responsabilidade
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Limitações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Precisão dos materiais
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Links
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Modificações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Lei aplicável
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default TermosDeUso
