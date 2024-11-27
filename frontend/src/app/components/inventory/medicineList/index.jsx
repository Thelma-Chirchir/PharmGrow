
import style from './style.module.css';
import {MedicinesListMain} from './MedicineListComp'
import { SideBar } from '../../dashboard/sidebar';
import dashboardstyle from '../../dashboard/style.module.css'
import { Layout } from '../../layout';
import { LayoutHeader } from '../../header';

export const MedicinesList=()=>{
    return(
        <section>
            <Layout>
                <LayoutHeader  />
                <MedicinesListMain />
            </Layout>
        </section>
    )
}