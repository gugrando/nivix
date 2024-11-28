import { motion } from "framer-motion";
import ScrollToTop from "../../Utils/ScrollToTop";

function PoliticaDePrivacidade() {
    ScrollToTop()

    return (
        <motion.section className="w-full h-fit">
            <motion.div className="mt-40 w-full h-fit flex flex-col items-center">
                <motion.h1
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    className="text-4xl text-center md:text-6xl text-white font-bold"
                >
                    Política de privacidade
                </motion.h1>
                <motion.p
                    className="md:max-w-5xl max-w-11/12 text-lg text-center text-gray-400 font-normal"
                >
                    Leia com atenção.
                </motion.p>
            </motion.div>

            <motion.div className="py-10 bg-white w-full h-fit mt-20 flex flex-col lg:flex-row">
                <motion.div className="lg:sticky md:top-32 lg:w-1/3 h-fit flex flex-col items-center">
                    <ol className="flex flex-col gap-4">
                        <h1 className="text-lg text-start md:text-xl text-black font-bold">Tópicos</h1>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">
                            <a href="#top">
                                Introdução
                            </a>
                        </li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Coleta de informações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Armazenamento de informações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Compartilhamento de informações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Sites externos</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Recusa de informações</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Aceita desta política</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Publicidade e cookies</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Compromisso do usuário</li>
                        <li className="w-fit hover:cursor-pointer text-gray-800 hover:text-primarySt">Mais informações</li>
                    </ol>
                </motion.div>

                <motion.div className="lg:px-20 flex flex-col w-full h-fit">
                    <div className="flex flex-col gap-4">
                        <h1 id='introducao' className="text-4xl text-start md:text-4xl text-black font-bold">
                            Introdução
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Coleta de informações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Armazenamento de informações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Compartilhamento de informações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Sites externos
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Recusa de informações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Aceita desta política       
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Publicidade e cookies
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Compromisso do usuário
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                    <div className="mt-16 flex flex-col gap-4">
                        <h1 className="text-4xl text-start md:text-4xl text-black font-bold">
                            Mais informações
                        </h1>
                        <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis explicabo alias aspernatur voluptatibus laborum eos voluptas tempore cum quasi temporibus. Odit, architecto quos, porro accusamus commodi nesciunt ullam repudiandae praesentium dolor, eos aliquam? Labore, quasi quae repellat deserunt quibusdam non.</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default PoliticaDePrivacidade