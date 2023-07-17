"use client"
import React from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import dayjs from "dayjs";
import {useQuery} from "@tanstack/react-query";
import {fetchRecommendation} from "@/apis/fetchRecommendation";
import CustomButton from "@/components/common/CustomButton";
import ScrollToTop from "@/components/common/ScrollToTop";

type GridItemProps = {
    time: string,
    thumbnailImg: string | StaticImport,
    desc: string,
    tags: Array<string>
}
const RecommendationGridItem : React.FC<GridItemProps> = ({time, thumbnailImg,tags, desc}) => {
    return <div className={'flex flex-col'}>
        <div className={'h-[144px] relative'}>
            <Image src={thumbnailImg} alt={time} fill={true}/>
            <span className={'absolute left-0 bottom-0 bg-primary-300 p-2 w-30 text-white text-sm font-inter'}>
                {dayjs(time).format('YYYY.MM.DD HH:mm')}
            </span>
        </div>
        <div className={'h-12 text-ellipsis line-clamp-2'}>
            {desc}
        </div>
        <div className={'flex gap-2'}>
            {
                tags.map(tag => <span key={tag} className={"text-primary-400 before:content-['#']"}>{tag}</span>)
            }
        </div>

    </div>
}
const RecommendationGrid : React.FC = () => {
    const {data} = useQuery({
        queryKey: ['recommendation-grid'],
        queryFn: () => fetchRecommendation()
    })
    return <>
        <div className={'relative grid grid-cols-4 gap-2 auto-rows-[222px]'}>
        {
            (data || []).map((item:any, index: number) => <RecommendationGridItem key={index} time={item.time} desc={item.desc} tags={item.tags} thumbnailImg={item.thumbnailImg}/>)
        }
        <ScrollToTop />
        </div>
        <CustomButton text={'記録をもっと見る'} classes={'mx-auto my-10'}/>
    </>
}

export default RecommendationGrid