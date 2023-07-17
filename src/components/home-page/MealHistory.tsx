import HexagonMenu from "@/components/home-page/HexagonMenu";
import React, {useMemo, useState} from "react";
import useUserData from "@/store/userData";
import Image from "next/image";
import dayjs from "dayjs";
import CustomButton from "@/components/common/CustomButton";
import fetchUserData from "@/apis/fetchUserData";
import {isEqual} from "lodash"
import ScrollToTop from "@/components/common/ScrollToTop";

type RecordProps = {
    date : string,
    type: string,
    thumbnailImg: string
}
const MealHistoryRecord : React.FC<RecordProps> = ({date, type, thumbnailImg}) => {
    return <div className={'relative aspect-square'}>
        <Image src={thumbnailImg} alt={date + type} fill={true}/>
        <span className={'absolute left-0 bottom-0 bg-primary-300 p-2 w-30 text-white'}>
            {dayjs(date).format('MM-DD')} {type}
        </span>
    </div>
}
const MealHistory : React.FC = () => {
    const mealHistory = useUserData(state => state.mealHistory)
    const [mealType, setMealType] = useState('')
    const [loading, setLoading] = useState(false)

    const filteredRecords = useMemo(() => {
        if (!mealType) return mealHistory
        return mealHistory.filter(m => m.type === mealType)
    },[mealHistory,mealType])

    const loadMore = async () => {
        try{
            setLoading(true)
            const data = await fetchUserData("", mealHistory.length)
            if (!isEqual(data.mealHistory, mealHistory))
                useUserData.setState(data)
        }catch (e) {
            alert(e)
        }finally {
            setLoading(false)
        }
    }

    return <div className={'custom-container flex flex-col items-center font-inter'}>
        <HexagonMenu setMealType={setMealType}/>
        <div className={'relative grid grid-cols-4 gap-2 w-[960px] my-6'}>
            {
                filteredRecords.map(m => <MealHistoryRecord key={m.type + m.date} {...m} />)
            }
            <ScrollToTop bottom={'50%'}/>
        </div>
        {
            loading ? <span>Loading...</span>
                : <CustomButton text={'記録をもっと見る'} onClick={loadMore}/>
        }
    </div>
}

export default MealHistory