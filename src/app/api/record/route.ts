import {NextResponse} from "next/server";
import {weightFatData} from "@/app/api/user/route";

const exercises = Array(20).fill({
    name: "家事全般（立位・軽い）",
    kcal: 26,
    time: 10
})
const diary = Array(8).fill({
    time: "2021.05.21 23:25",
    content: "私の日記の記録が一部表示されます。\n" +
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
})
export async function POST(request: Request) {
    const {userName,  type} = await request.json()
    const mockData = type === 'exercise' ? exercises : diary
    return NextResponse.json(mockData)
}