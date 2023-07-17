"use client"
import AchievementRate from "@/components/home-page/AchievementRate";
import Graph from "@/components/common/Graph";
import {useMeasure} from "react-use";
import useUser from "@/hooks/useUser";
import MealHistory from "@/components/home-page/MealHistory";
import useUserData from "@/store/userData";

export default function Home() {
    useUser()
    const chartData = useUserData(state => state.weightFatData)
    const [ref, { width}] = useMeasure<HTMLDivElement>();
    return (
    <main className="flex min-h-screen flex-col">
      <div className={'w-full grid grid-cols-[30%_70%] h-[312px]'} >
          <AchievementRate/>
          <div ref={ref} className={'bg-dark-600'}>
              <Graph containerWidth={width} data={chartData}/>
          </div>
      </div>
        <div className={'custom-container py-6'}>
            <MealHistory/>
        </div>
    </main>
  )
}
