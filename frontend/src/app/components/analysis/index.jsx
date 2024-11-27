import React from "react"
import {Layout} from '../layout'
import style from './style.module.css'
import { Main } from "./AnalysisComp"
import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from "../header"

export const Analysis = () => {
    return (
        <section>
            <Layout>
                <LayoutHeader  />
                <Main />
            </Layout>
        </section>
    )
}