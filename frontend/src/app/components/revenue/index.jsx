import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { RevenueComp } from "./RevenueComp"
import dashboardStyle from '../dashboard/style.module.css'

export const Revenue = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <RevenueComp/>
        </section>
    )
}