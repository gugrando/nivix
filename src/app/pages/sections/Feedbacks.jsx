import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion"
import Sec from '../../Utils/Sec';
import Partners from "../sections/Partners"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Feedbacks = () => {
    return (
        <>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className='bg-[#000B14] w-full flex flex-col items-center md:p-2'>
                <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -200 }} className='text-center mt-28 md:mt-40 md:mb-16 mb-10 z-40 text-4xl md:text-5xl text-white font-bold'>
                    <Sec text={"Depoimentos"}/>
                    Feedback dos nossos parceiros
                </motion.h1>
                <Swiper className='relative w-full h-fit flex' autoplay={{delay: 10000, disableOnInteraction: false,}}  effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'auto'} coverflowEffect={{rotate:0, stretch:0, depth:100, modifier:2.5}} pagination={{el:'.swiper-pagination', clickable:true}} navigation={{nextEl:'.button-next', prevEl:'.button-prev', clickable:true}} autoCorrect='true' modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/silent-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Junior Ricardo
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    Fundador
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    A parceria com a Nivix foi um divisor de águas para a Silent. Com campanhas criativas e estratégias certeiras, nossos lançamentos alcançaram um público muito maior e as vendas cresceram 35% logo nos primeiros drops. Estamos mais do que satisfeitos e recomendamos!&quot;
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/hightower-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Guilherme Ferreira
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    CMO
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    &quot;Trabalhar com a Nivix transformou nossa presença digital. As estratégias em anuncios e o suporte impecável ajudaram a HTower a conquistar 40% mais leads qualificados em apenas quatro meses e por consequencia vender divesos imóveis. Investimento que realmente trouxe resultados!&quot;
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/vieira-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Nelson Vieira
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    Fundador
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    Com estratégias bem planejadas, conseguimos aumentar nossa visibilidade online e dobrar o número de pedidos personalizados em apenas dois meses, em especial no Google, onde os resultados foram impressionantes. O resultado superou nossas expectativas a ponto de não termos mais tempo na agenda!
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/ita-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Bruna Oliveira
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    Gerente de Vendas
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                A Nivix foi essencial para impulsionar nossos resultados. Com campanhas estratégicas e uma gestão eficiente, a Ita Concessionária aumentou suas vendas em 30% e consolidou sua marca no mercado local. Uma parceria de sucesso!
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/masotto-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Jonatan Gomes
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    CTO
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    A Masotto Concessionária atingiu novos patamares. Suas estratégias criativas e foco em performance nos ajudaram a ampliar nossa base de clientes e aumentar as vendas significativamente. Resultado que faz a diferença!
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/correiasport-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Roberto Correia
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    Fundador
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    &quot;A Nivix foi fundamental para modernizar a imagem do Correia Sport Club. Com estratégias digitais eficazes, conseguimos atrair mais associados e ampliar a participação nas nossas modalidades esportivas. Um trabalho que fez toda a diferença!&quot; – Equipe Correia Sport Club
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_slide1'>
                        <motion.div className='px-10 p-7 w-[23rem] md:w-[28rem] md:h-[30rem] bg-gray-200 rounded-xl'>
                            <motion.div className='flex justify-between w-full h-[4rem]'>
                                <motion.img className='w-[4rem] h-[4rem] rounded-full' src='/pessoas.png' alt='foto de um cliente'></motion.img>
                                <motion.img className='rounded-lg' src='/craft-miniature.png' alt='logo da empresa do cliente'></motion.img>
                            </motion.div>
                            <motion.div className='border border-t-neutral-300 mt-4 w-full h-fit'>
                                <motion.h1 className='mt-3 md:mt-8 text-2xl font-semibold text-neutral-800'>
                                    Tiago Santos
                                </motion.h1>
                                <motion.p className='text-neutral-500'>
                                    Fundador
                                </motion.p>
                                <motion.p className='mt-3 md:mt-6 text-neutral-800'>
                                    A Nivix transformou a presença digital do Craft Sushi. Com campanhas criativas e bem direcionadas, conseguimos aumentar nossas reservas online em 40% e atrair mais clientes fiéis. O resultado foi incrível e superou nossas expectativas!
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                    
                    
                    <div className='button-prev absolute top-[50%] left-2 z-40 w-[32px] h-[32px]'>
                        <img className='w-full h-full rounded-full' src="/before.png" alt="seta para esquerda" />
                    </div>
                    <div className='button-next absolute top-[50%] right-2 z-40 w-[32px] h-[32px]'>
                        <img className='w-full h-full rounded-full' src="/next.png" alt="seta para direita" />
                    </div>
                    
                    <div className='slider-controler w-full'>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                
                <Partners />
            </motion.div>  
        </>
    );
}
 
export default Feedbacks;