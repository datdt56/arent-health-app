import React from "react";
import dayjs from "dayjs";
import {useQuery} from "@tanstack/react-query";
import {fetchDiaryData, fetchExerciseData} from "@/apis/fetchRecordData";
import CustomButton from "@/components/common/CustomButton";

type DiaryItemProps = {
    time: string,
    content: string
}
const DiaryItem : React.FC<DiaryItemProps> = ({time, content}) => {
    return <div className={'aspect-square border border-black border-solid p-4 pb-7 flex flex-col gap-2'}>
        <div className={'w-[147px] h-12'}>
            <p>{dayjs(time).format('YYYY.MM.DD')}</p>
            <p>{dayjs(time).format('HH:mm')}</p>
        </div>
        <div className={'line-clamp-5 whitespace-break-spaces text-ellipsis'}>
                {content}
        </div>
    </div>

}
const MyDiary : React.FC = () => {
    const {data} = useQuery({
        queryKey: ['my-diary'],
        queryFn: () => fetchDiaryData("")
    })
    return <div className={'flex flex-col'}>
        <div className={'text-black text-lg font-inter'}>
            MY DIARY
        </div>
        <div className={'grid grid-cols-4 gap-1'}>
            {
                (data || []).map((i: any, index: number) => <DiaryItem key={index} time={i.time} content={i.content}/>)
            }
        </div>
        <CustomButton text={'自分の日記をもっと見る'} classes={'my-11 mx-auto'} />
    </div>
}

export default MyDiary