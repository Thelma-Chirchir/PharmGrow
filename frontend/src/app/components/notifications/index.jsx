// import {SfNav} from 'react-sf-building-blocks'
// import DateTime from '../dateTime'

import React from "react"
import DateTime from "../dateTime"
import axios from "axios"
import toast from "react-hot-toast"


export const Notification = (props) => {
    
    const [data, setData] = React.useState([])
    const [badge, setBadge]=React.useState()
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.all);
                toast(result.all.message)

            })
            .catch(error => console.log(error))
            setBadge(data.length)
    }, [])
    // let index={props.index}
    return (
        <section></section>



    )
}