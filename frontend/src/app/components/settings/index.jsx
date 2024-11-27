import React from "react"
import { Layout } from '../layout'
import style from './style.module.css'
import { Main, AddUsers, UsersList } from "./SettingsComp"
import dashboardstyle from '../dashboard/style.module.css'
import { LayoutHeader } from "../header"

export const Settings = () => {
    return (
        <section>
            <Layout>
                <LayoutHeader />
                <Main />
            </Layout>
        </section>
    )
}
export const AddUserSection = () => {
    return (
        <section >
            <Layout>
                <LayoutHeader />
                <AddUsers />
            </Layout>
        </section>
    )
}
export const UsersListSection = () => {
    return (
        <section >
            <Layout>
                <LayoutHeader />
                <UsersList />
            </Layout>
        </section>
    )
}