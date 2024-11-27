import { Layout} from '../layout'
import { LayoutHeader } from '../header';
import style from './style.module.css';
import dashboardstyle from '../dashboard/style.module.css'
import { InventoryMain } from "./InventoryComp"

export const Inventory=()=>{
    // className={dashboardstyle.dashboard}
    return(
        <section className={style.Inventorycontainer}>
            <Layout>
                <LayoutHeader  />
                <InventoryMain />
            </Layout>
        </section>
    )
}