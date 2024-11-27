import React from "react";
import { AddUserSection, Settings, UsersListSection } from "../components/settings";


export const SettingsPage=()=>{
    return(
    <Settings/>
    )
}
export const AddUserPage=()=>{
    return(
    <AddUserSection/>
    )
}
export const UserListPage=()=>{
    return(
    <UsersListSection/>
    )
}