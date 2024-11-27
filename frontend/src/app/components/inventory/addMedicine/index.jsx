import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import {Layout} from '../../layout'
import { AddMedicineMain } from "./AddMedicineComp"
import dashboardstyle from '../../dashboard/style.module.css'
import { LayoutHeader } from "../../header";

export const AddMedicine=()=>{
    // className={style.addMedicineComp}
    return(
        <section>
           <Layout>
                <LayoutHeader  />
                <AddMedicineMain />
            </Layout>
        </section>
    )
}