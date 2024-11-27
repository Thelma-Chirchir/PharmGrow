import { Layout} from '../../layout'
import style from './style.module.css';
import {MedicinesDetailMain} from './medicineDetailComp'
import dashboardstyle from '../../dashboard/style.module.css'
import { LayoutHeader } from '../../header';

export const MedicinesDetail=()=>{
    return(
        <section>
            <Layout>
                <LayoutHeader  />
                <MedicinesDetailMain />
            </Layout>
        </section>
    )
}