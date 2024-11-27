import React from "react"
import {Layout} from '../../layout'
import style from './style.module.css'
import dashboardStyle from '../../dashboard/style.module.css'
import { Main } from "./ShortageComp"
import { LayoutHeader } from "../../header"

export const Shortage = () => {
    return (
        <section>
           <Layout>
                <LayoutHeader  />
                <Main />
            </Layout>
        </section>
    )
}