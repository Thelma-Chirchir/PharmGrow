// // "use client"
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const DropDown = () => {
    // const [monthYear, setMonthYear]=useState([])
    const [data, setData] = useState([])
    const [selected, setSelected]= useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
        <div>
            <select name="" id="" onChange={(e)=>{
                const current=data.find((x)=> x.month===e.target.value)
                setSelected(current)}}>
            {data ? data.map((month, index) =>
                <option key={index} value={index}>{month.month}</option>
            ) : null}
            </select>
        </div>
        {selected ? <div monthData={selected}></div> : null}
        </div>
    )
}
// // import * as React from "react"

// // import { Button } from "@/components/ui/button"
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuLabel,
// //   DropdownMenuRadioGroup,
// //   DropdownMenuRadioItem,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// //   DropdownMenuSelect
// // } from "@/components/ui/dropdown-menu"

// // export function DropdownMenuRadioGroupDemo() {
// //   const [position, setPosition] = React.useState("bottom")

// //   return (
// //     <DropdownMenu>
// //       <DropdownMenuTrigger asChild>
// //         <Button variant="outline">Open</Button>
// //       </DropdownMenuTrigger>
// //       <DropdownMenuContent className="w-56">
// //         <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
// //         <DropdownMenuSeparator />
// //         <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
// //           <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
// //           <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
// //           <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
// //         </DropdownMenuRadioGroup>
// //       </DropdownMenuContent>
// //     </DropdownMenu>
// //   )
// // }

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import ReactMonthPicker from "react-month-picker";
// import "react-month-picker/css/month-picker.css";
// // import  { Component } from 'react';
// // import { render } from 'react-dom';

// import {
//   MonthPickerDropdown
// } from 'react-month-picker-dropdown'
// import 'react-month-picker-dropdown/dist/index.css'

// export const MonthPicker = ({ range }) => {
//   const [isVisible, setVisibility] = useState(false);
//   const [monthYear, setMonthYear] = useState({});

//   const showMonthPicker = (event) => {
//     setVisibility(true);
//     event.preventDefault();
//   };

//   const handleOnDismiss = () => {
//     setVisibility(false);
//   };

//   const handleOnChange = (year, month) => {
//     setMonthYear({ year, month });
//     setVisibility(false);
//   };

//   const getMonthValue = () => {
//     const month = monthYear && monthYear.month ? monthYear.month : 0;
//     const year = monthYear && monthYear.year ? monthYear.year : 0;

//     return month && year ? `${month}-${year}` : "Select Month";
//   };

//   return (
//     <div className="MonthYearPicker">
//       <button onClick={showMonthPicker}>{getMonthValue()}</button>

//       <ReactMonthPicker
//         show={isVisible}
//         lang={[
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec"
//         ]}
//         years={range}
//         value={monthYear}
//         onChange={handleOnChange}
//         onDismiss={handleOnDismiss}
//       />
//     </div>
//   );
// };



// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);



// export const monthYear=()=> {
//   const handleAMonthChange = (event) => {
//     console.log(event)
//   }

//   const getMarkUpForOkButton = () => {
//     return (
//       <button className='button'> Select Me</button>
//     )
//   }

//   const getMarkUpForCancelButton = () => {
//     return (
//       <button className='button'> Cancel Me</button>
//     )
//   }
//   return (
//     <div>
//       <MonthPickerDropdown
//       CTabIndex={3}
//       label="Select Months"
//       searchTextLabel="Filter the months by typing here"
//       startYear={2024}
//       startMonth={1}
//       endYear={2030}
//       endMonth={5}
//       displayShortMonthName={true}
//       displayShortYearName={false}
//       hideCheckBox={true}
//       displayOkAndCancelButton={true}
//       onChange={this.handleAMonthChange}
//     />
//   </div>
//   );
// }

// import React from "react";

// export const MonthYear = () => {

// }