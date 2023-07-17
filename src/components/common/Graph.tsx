import {CartesianGrid, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import React from "react";
import {WFChartData} from "@/types/chart";



interface GraphProps {
    containerWidth: number,
    data: Array<WFChartData>
}

const Graph : React.FC<GraphProps> = ({containerWidth, data}) => {
    return <LineChart
            width={containerWidth}
            height={312}
            data={data}
            margin={{ top: 12, right: 98, bottom: 7, left: 53}}
    >
        <CartesianGrid horizontal={false}/>
        <XAxis dataKey="period" axisLine={false} stroke={'#FFF'}/>
        <Line dataKey="bodyWeight" stroke="#FFCC21" strokeWidth={2}/>
        <Line dataKey="bodyFat" stroke="#8FE9D0" strokeWidth={2}/>
    </LineChart>
}

export default Graph