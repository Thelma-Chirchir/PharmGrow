import { BsFileBarGraph } from "react-icons/bs";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoPricetagSharp, IoBookmarks } from "react-icons/io5";

export const data = [

    { icon: <BsFileBarGraph/>, figure: '$1k', title: 'Total Sales', increase: '8' },
    { icon: <IoBookmarks />, figure: '300', title: 'Total Order', increase: '5' },
    { icon: <IoPricetagSharp />, figure: '5', title: 'Product Sold', increase: '1.2' },
    { icon: <MdOutlinePersonAddAlt1 />, figure: '8', title: 'New Customers', increase: '0.5' }

]

export const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },

        }
    },
    stroke: {
        curve: 'smooth'
    }
}

export const areaOption = {
    //     series: [
    //     {
    //       name: 'North',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 20
    //       })
    //     },
    //     {
    //       name: 'Central',
    //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
    //         min: 10,
    //         max: 15
    //       })
    //     }
    //   ],
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
};

export const datanew = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];