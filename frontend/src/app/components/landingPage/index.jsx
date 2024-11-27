import { LandingHeader, LandingFooter, DashboardView, Hero, Offer, Features, Guide } from "./LandingPageComp"
import style from './style.module.css'

export const Landing=()=>{
    return(
    <section className={style.landing}>
        <LandingHeader/>
        <Hero/>
        {/* <DashboardView/> */}
        <Features/>
        <Guide/>
        <Offer/>
        <LandingFooter/>
    </section>
)}

