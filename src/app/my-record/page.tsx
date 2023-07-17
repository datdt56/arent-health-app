"use client"
import {NextPage} from "next";
import {myRecordCategories} from "@/constant";
import Category from "@/components/common/Category";
import BodyRecordChart from "@/app/my-record/BodyRecordChart";
import React from "react";
import MyExercise from "@/app/my-record/MyExercise";
import MyDiary from "@/app/my-record/MyDiary";
import ScrollToTop from "@/components/common/ScrollToTop";

const MyRecordCategories : React.FC = () => {
    return <div className={'w-full grid grid-cols-3 gap-14'}>
        {
            myRecordCategories.map(cat => <Category key={cat.title} {...cat}/>)
        }
    </div>
}
const MyRecord : NextPage = () => {
    return <div className={'custom-container relative flex flex-col py-14 gap-14'}>
        <MyRecordCategories />
        <BodyRecordChart />
        <MyExercise />
        <MyDiary />
        <ScrollToTop bottom={'55%'}/>
    </div>
}

export default MyRecord