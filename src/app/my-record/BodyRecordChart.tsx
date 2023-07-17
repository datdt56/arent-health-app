import React, {useState} from "react";
import {ChartMode} from "@/types/chart";
import Graph from "@/components/common/Graph";
import {useQuery} from "@tanstack/react-query";
import {fetchChartData} from "@/apis/fetchRecordData";
import DarkContainer from "@/components/common/DarkContainer";
import {bodyRecordChartModes} from "@/constant";


const BodyRecordChart : React.FC = () => {
    const [mode, setMode] = useState<ChartMode>("年")
    const {data,error} = useQuery({
        queryKey: ['body-record-chart',mode],
        queryFn: () => fetchChartData("",mode)
    })

    const chartData = data ? data : []


    return <DarkContainer title={'Body Record'}>
        <Graph containerWidth={960} data={chartData}/>
        <div className={'flex gap-9'}>
            {
                bodyRecordChartModes.map((m) => {
                    const classes = m === mode ? 'text-white bg-primary-300' : 'text-primary-300 bg-white'
                    return <button
                        key={m}
                        className={classes + ' h-6 w-14 rounded-xl'}
                        onClick={() => setMode(m)}
                    >
                        {m}
                    </button>
                })
            }
        </div>
    </DarkContainer>
}

export default BodyRecordChart