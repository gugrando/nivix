import Hero from "./sections/Hero"
import Draw from "./sections/Draw"
import Tecinfos from "./sections/Tecinfos"
import Zooming from "./sections/Zooming"
import Process from "./sections/Process"
import Founders from "./sections/Founders"
import Feedbacks from "./sections/Feedbacks"
import FAQ from "./sections/FAQ"
import Cookies from "../Utils/Cookies"
import { useCookies } from "react-cookie"
import ScrollToTop from "../Utils/ScrollToTop"

function Home (){
    ScrollToTop()
    const [cookies] = useCookies(['cookieConsent']);
    return (
        <main>
            {!cookies.cookieConsent && <Cookies />}
            <Hero />
            <div className="flex flex-col h-fit w-full items-center z-10 overflow-x-clip">
                <Draw />
                <Tecinfos />
                <Zooming />
                <Process />
                {/* <ProcessInfo /> */}
                {/* <CasesSlide /> */}
                <Feedbacks />
                <Founders />
                <FAQ />
            </div>
        </main>
    )
}
export default Home