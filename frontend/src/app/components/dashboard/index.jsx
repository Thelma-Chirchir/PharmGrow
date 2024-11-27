import React from "react"
import { SideBar } from './sidebar/index'
import style from './style.module.css'
import { Main } from "./DashboardComp"
import { Layout } from "../layout"
import { LayoutHeader } from "../header"

export const Dashboard = () => {
    // className={style.dashboard}
    return (
        <section >
            <Layout>
                <LayoutHeader  />
                <Main/>
            </Layout>
            {/* <Main className={style.absolute}/> */}
        </section>
    )
}