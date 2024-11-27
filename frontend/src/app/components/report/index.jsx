import React from "react"
import {Layout } from '../layout'
import style from '../report/style.module.css'
import { Main } from "./reportComp"
import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from "../header"

export const Report = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <Layout>
                <LayoutHeader  />
                <Main />
            </Layout>
        </section>
    )
}