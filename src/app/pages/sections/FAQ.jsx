import { AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import Sec from "../../Utils/Sec";
import Button from "../../Utils/Button";

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question: 'O que torna a Nivix diferente das outras agências?',
            answer: 'Na Nivix, nosso foco é entregar resultados reais e personalizados. Trabalhamos lado a lado com nossos clientes, oferecendo soluções integradas que combinam criatividade, estratégia e tecnologia para alcançar seus objetivos de forma eficaz e sustentável.'
        },
        {
            id: 2,
            question: 'Como posso ter certeza de que a Nivix irá gerar resultados para meu negócio?',
            answer: 'Nossa abordagem é orientada por dados e análises contínuas. A cada etapa da campanha, monitoramos de perto os resultados e ajustamos as estratégias para garantir que sua empresa tenha o melhor desempenho possível.'
        },
        {
            id: 3,
            question: 'Como a Nivix pode ajudar a aumentar minhas vendas?',
            answer: 'Focamos em criar campanhas direcionadas e altamente eficazes, usando as melhores práticas de marketing digital e otimização de conversões. A combinação de estratégias de tráfego pago, SEO e design envolvente contribui diretamente para o aumento das vendas.'
        },
        {
            id: 4,
            question: 'Quais tipos de empresas vocês atendem?',
            answer: 'Temos 3 equipes especializadas (Automotiva, Moda, Delivery) e a equipe Geral, mas atendemos empresas de todos os tamanhos e setores. Seja você uma pequena empresa ou uma grande corporação, temos soluções personalizadas para impulsionar sua marca e alcançar seus objetivos de negócios.'
        },
        {
            id: 5,
            question: 'Quais serviços a Nivix oferece?',
            answer: 'Oferecemos uma gama completa de serviços, 360°, incluindo design gráfico, desenvolvimento web, gestão de tráfego pago, estratégias de marketing digital, branding e consultoria. Tudo para garantir que sua empresa se destaque no mercado.'
        },
        {
            id: 6,
            question: 'Qual é o prazo para ver resultados?',
            answer: 'Os resultados podem variar dependendo da estratégia adotada e do tipo de serviço contratado. No entanto, trabalhamos com um planejamento claro e realista, buscando gerar os primeiros resultados visíveis já nas primeiras semanas de campanha.'
        },
        {
            id: 7,
            question: 'Qual é o investimento necessário para começar a trabalhar com a Nivix?',
            answer: 'O investimento é personalizado, de acordo com as necessidades e objetivos da sua empresa. Após uma análise detalhada do seu negócio, criamos uma proposta que se encaixa no seu orçamento e entrega o maior valor possível para alcançar os resultados desejados. Se você tem essa dúvida, entre em contato e fale conosco sem compromisso!'
        }
    ]

    return (
        <motion.section className="mt-40 w-full h-full flex flex-col justify-center items-center bg-[#000B14]">  
            <motion.h1 className="text-5xl text-center text-white font-bold">
                <Sec text="FAQ"/>
                Perguntas e respostas
            </motion.h1>
            <motion.div className="flex flex-col items-center lg:items-start lg:flex-row w-full lg:px-32">

                <motion.div className="flex flex-col justify-center w-full md:w-11/12 lg:w-11/12 h-fit mt-16 max-with-[1400px] p-2 md:p-8 rounded-lg shadow-md">
                    {questions.map((questions) =>(
                        <motion.div key={questions.id} className="mb-4 last:mb-0"> 
                            <button id='al' aria-label="Abrir ou fechar pergunta" onClick={() => setOpenQuestion(openQuestion === questions.id ? null : questions.id)} className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items center">
                                {questions.question}
                                {openQuestion === questions.id ? <FaMinusCircle className="" /> : <FaPlusCircle className="" />}
                            </button>
                            <AnimatePresence>
                                {openQuestion === questions.id && (
                                    <motion.div className="mt-2 text-gray-600 ml-4" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto"}} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                                        <motion.p>{questions.answer}</motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div className="flex flex-col items-start w-full md:w-[40rem] h-fit border-4 border-primarySt/20 rounded-tl-3xl rounded-br-3xl m-16 md:p-12 p-8">
                    <div className="flex items-center gap-4">
                        <FaHeadset className="w-[4rem] h-[4rem] text-primarySt"/>
                        <h2 className="text-3xl font-bold text-white">Ainda tem dúvidas?</h2>
                    </div>
                    <p className="text-white mt-8 text-xl">
                        Dúvidas? Nossa equipe está a disposição para atender você, sem compromisso nenhum!
                    </p>
                    <div className="md:mt-40 mt-20">
                        <p className="text-white md:text-3xl text-2xl font-bold">
                            Será um prazer falar com você, agora!
                        </p>
                        <div className="flex md:flex-row flex-col w-full items-center   gap-4 mt-4">
                            <Button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.90 }} text="Entrar em contato" className="w-12/12 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl" />
                            <Button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.90 }} text="" className="hidden md:flex w-[4rem] h-[4rem] bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
 
export default FAQ;