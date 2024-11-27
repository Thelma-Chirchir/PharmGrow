import style from './style.module.css';
import { LayoutHeader } from '../header'
import { MdOutlineAdd } from "react-icons/md";
import dashboardstyle from '../dashboard/style.module.css'
import { analysisOne } from './data';
import { routes } from '../../utilities/routes';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';

// export const InventoryComp = () => {
//     return (
//         <section className={style.inventory}>
//             <header className={style.header}><LayoutHeader /></header>
//             <div className={style.main}><InventoryMain /></div>
//         </section>
//     )
// }

export const InventoryMain = () => {
    return (
        <div className={combinedClasses( style.mainDiv)}>
            <div className={combinedClasses(dashboardstyle.head, style.head)}>
                <div className={combinedClasses(dashboardstyle.info, style.info)}>
                    <h3>Inventory</h3>
                    <p>List of Medicines available for sales</p>
                </div>
                <div className={dashboardstyle.downloadButton}>
                    <button >
                        <Link to={routes.addMedicine()} className={combinedClasses(style.downloadButton, 'link')} >
                            <MdOutlineAdd />
                            <p>Add New Item</p>
                        </Link>
                    </button>
                </div>
            </div>
            <AnalysisOne />
        </div>
    )
}

export const AnalysisOne = () => {
    return (
        <div className={combinedClasses( style.analysis)}>
            {
                analysisOne.map((analysis) =>
                    <div className={dashboardstyle.eachAnalysis}>
                        <div className={dashboardstyle.main}>
                            <div className={dashboardstyle.image}>{analysis.icon}</div>
                            <h6>{analysis.title}</h6>
                            <div className={dashboardstyle.description}><p>{analysis.description}</p></div>
                        </div>
                        {/* <div className={dashboardstyle.footer}>
                            <p>{analysis.footer}</p>
                            {analysis.arrowRight}
                        </div> */}
                        <Link to={analysis.url} className={combinedClasses(dashboardstyle.footer, 'link')} >
                            <p>{analysis.footer}</p>
                            {analysis.arrowRight}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}