import React from "react"
import {SideBar } from '../../dashboard/sidebar'
import style from './style.module.css'
import dashboardStyle from '../../dashboard/style.module.css'
import { Main} from "./GroupComp"
import {Layout} from '../../layout'
import { LayoutHeader } from "../../header"

export const Groups = () => {
    // className={dashboardStyle.dashboard}
    return (
        <section>
            <Layout >
                <LayoutHeader  />
                <Main />
            </Layout>
        </section>
    )
}