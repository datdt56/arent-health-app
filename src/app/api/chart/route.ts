import {NextResponse} from "next/server";
import {weightFatData} from "@/app/api/user/route";

export async function POST(request: Request) {
    const {userName,  chartMode} = await request.json()
    const mockChartData = weightFatData
    return NextResponse.json(mockChartData)
}