// import { motion } from 'framer-motion'
import Hero from "./sections/Hero"
import Draw from "./sections/Draw"
import Tecinfos from "./sections/Tecinfos"
import Zooming from "./sections/Zooming"
import Process from "./sections/Process"
import CasesSlide from "./sections/CasesSlide"
import Founders from "./sections/Founders"

function Home (){
    return (
        <>
            <main>
                <Hero />
                <div className="flex flex-col h-fit w-full items-center z-10 overflow-x-clip">
                    <Draw />
                    <Tecinfos />
                    <Zooming />
                    <Process />
                    <CasesSlide />
                    <Founders />
                    {/* <div className="h-[8rem] w-full bg-green-600"></div> */}
                </div>
            </main>
        </>
    )
}
export default Home