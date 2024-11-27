import { routes } from "../../utilities/routes";

export const mapData=[
    {title: 'Total Revenue', amount: '$3,500', increase: '19%', url: routes.revenue()},
    {title: 'Total Stock', amount: '$3,500', increase: '19%', url: routes.medicineslist()},
    {amount: "50", title: "Medicine Shortage", decrease: '19%', url: routes.medicinesShortage()}
    // {title: 'Unique Users', amount: '$3,500', increase: '19%'},
    // {title: 'Total Transactions', amount: '$3,500', increase: '19%'}
]