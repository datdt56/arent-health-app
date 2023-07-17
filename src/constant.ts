import bodyRecordImg from "@/asset/Photo/MyRecommend-1.jpg"
import myExcerciseImg from "@/asset/Photo/MyRecommend-2.jpg"
import myDiaryImg from "@/asset/Photo/MyRecommend-3.jpg"
import {ChartMode} from "@/types/chart";

export const meals = ['Morning','Lunch','Dinner','Snack']

export const myRecordCategories = [
    {
        title: 'Body Record',
        desc: '自分のカラダの記録',
        bgImg: bodyRecordImg
    },
    {
        title: 'My Exercise',
        desc: '自分の運動の記録',
        bgImg: myExcerciseImg
    },
    {
        title: 'My Diary',
        desc: '自分の日記',
        bgImg: myDiaryImg
    }
]

export const recommendedCategories = [
    {
        title: 'Recommended Column',
        desc: 'オススメ',
    },
    {
        title: 'Recommended Diet',
        desc: 'ダイエット',
    },
    {
        title: 'Recommended Beauty',
        desc: '美容',
    },
    {
        title: 'Recommended Health',
        desc: '健康',
    }
]

export const bodyRecordChartModes = ["日", "週", "月", "年" ] as Array<ChartMode>