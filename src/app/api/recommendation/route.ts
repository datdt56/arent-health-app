import {NextResponse} from "next/server";
import column1Img from "@/asset/Photo/column-1.jpg"
import column2Img from "@/asset/Photo/column-2.jpg"
import column3Img from "@/asset/Photo/column-3.jpg"
import column4Img from "@/asset/Photo/column-4.jpg"
import column5Img from "@/asset/Photo/column-5.jpg"
import column6Img from "@/asset/Photo/column-6.jpg"
import column7Img from "@/asset/Photo/column-7.jpg"
import column8Img from "@/asset/Photo/column-8.jpg"

const time = "2021.05.17 23:25"
const desc = "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ"
const tags = ["魚料理",  "和食",  "DHA"]
export async function GET(request: Request) {
    const mockData = [column1Img, column2Img, column3Img, column4Img, column5Img, column6Img, column7Img, column8Img]
        .map(item => ({
            time,tags,desc, thumbnailImg: item
        }))
    return NextResponse.json(mockData)
}