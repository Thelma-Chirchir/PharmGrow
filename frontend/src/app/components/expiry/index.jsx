import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { ExpiryComp, RevenueComp } from "./ExpiryComp"
import dashboardStyle from '../dashboard/style.module.css'

export const expiry = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <ExpiryComp/>
        </section>
    )
}