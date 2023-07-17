import {NextResponse} from "next/server";
import m01Img from "@/asset/Photo/m01.jpg"
import m02Img from "@/asset/Photo/m02.jpg"
import l01Img from "@/asset/Photo/l01.jpg"
import l02Img from "@/asset/Photo/l02.jpg"
import l03Img from "@/asset/Photo/l03.jpg"
import d01Img from "@/asset/Photo/d01.jpg"
import d02Img from "@/asset/Photo/d02.jpg"
import s01Img from "@/asset/Photo/s01.jpg"

export const weightFatData = [
    {
        "period": "6月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "7月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "8月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "9月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "10月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "11月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "12月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "1月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "2月",
        "bodyWeight": 40,
        "bodyFat": 10
    },
    {
        "period": "3月",
        "bodyWeight": 33,
        "bodyFat": 7
    },
    {
        "period": "4月",
        "bodyWeight": 38,
        "bodyFat": 6
    },
    {
        "period": "5月",
        "bodyWeight": 50,
        "bodyFat": 5
    }

]

const mealHistory = [
    {
        date: "2023/05/21",
        type: "Morning",
        thumbnailImg: m01Img
    },
    {
        date: "2023/05/21",
        type: "Lunch",
        thumbnailImg: l03Img
    },
    {
        date: "2023/05/21",
        type: "Dinner",
        thumbnailImg: d01Img
    },
    {
        date: "2023/05/21",
        type: "Snack",
        thumbnailImg: l01Img
    },
    {
        date: "2023/05/20",
        type: "Morning",
        thumbnailImg: m02Img
    },
    {
        date: "2023/05/20",
        type: "Lunch",
        thumbnailImg: l02Img
    },
    {
        date: "2023/05/20",
        type: "Dinner",
        thumbnailImg: d02Img
    },
    {
        date: "2023/05/20",
        type: "Snack",
        thumbnailImg: s01Img
    }
    ]
export async function POST(request: Request) {
    const {userName, recordOffset} = await request.json()
    const mockUserData = {
        achievementRate : Math.floor(Math.random() * 101),
        weightFatData,
        mealHistory
    }
    return NextResponse.json(mockUserData)
}