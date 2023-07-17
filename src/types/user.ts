import {WFChartData} from "@/types/chart";
import {MealHistoryRecord} from "@/types/meal";

export type User = {
    achievementRate: number,
    weightFatData: Array<WFChartData>,
    mealHistory: Array<MealHistoryRecord>

}