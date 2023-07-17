import React from "react";
import DarkContainer from "@/components/common/DarkContainer";
import {useQuery} from "@tanstack/react-query";
import {fetchChartData, fetchExerciseData} from "@/apis/fetchRecordData";

type ExerciseProps = {
    name : string,
    kcal: number,
    time: number
}
const Excercise : React.FC<ExerciseProps> = ({name, kcal, time}) => {
    return <div className={'pr-3 flex justify-between'} style={{borderBottom: "solid 0.5px #777"}}>
        <div className={'pl-4 flex flex-col'}>
            <div className={'exercise-name relative max-w-[200px] text-white'}>
                {name}
            </div>
            <div className={'text-base text-primary-300'}>
                {kcal}kcal
            </div>
        </div>
        <div className={'text-lg text-primary-300'}>
            {time} min
        </div>
    </div>
}

const MyExercise : React.FC = () => {
    const {data} = useQuery({
        queryKey: ['my-exercise'],
        queryFn: () => fetchExerciseData("")
    })
    return <DarkContainer title={'My Exercise'}>
        <div className={'exercise grid grid-cols-2 gap-10 h-[192px] overflow-y-scroll py-2'}>
            {
                (data || []).map((r:any, index: number) => <Excercise key={index} name={r.name} kcal={r.kcal} time={r.time}/>)
            }
        </div>
    </DarkContainer>
}

export default MyExercise