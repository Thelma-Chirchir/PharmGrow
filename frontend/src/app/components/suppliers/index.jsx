import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { Main } from "./SupliersComp"
import dashboardStyle from '../dashboard/style.module.css'
import { AddSupplier } from "./SupliersComp"
import {Layout} from '../layout'
import { LayoutHeader } from "../header"

export const Supplier = () => {
    // className={dashboardStyle.dashboard}
    return (
        <section className={dashboardStyle.dashboard}>
            <Layout>
                <LayoutHeader  />
                <Main />
            </Layout>
        </section>
    )
}
export const AddNewSupplier=()=>{
    return (
        <section className={dashboardStyle.dashboard}>
            <Layout>
                <LayoutHeader  />
                <AddSupplier />
            </Layout>
        </section>
    )
}