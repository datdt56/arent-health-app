import axios from "axios";
import {ChartMode} from "@/types/chart";

export const fetchChartData= async (userName : string, chartMode : ChartMode) => {
    try{
        const res = await axios.post("/api/chart",{
            userName,
            chartMode
        })
        return res.data
    }catch (e) {
        return Promise.reject(e)
    }
}

export const fetchExerciseData= async (userName : string) => {
    try{
        const res = await axios.post("/api/record",{
            userName,
            type: "exercise"
        })
        return res.data
    }catch (e) {
        return Promise.reject(e)
    }
}

export const fetchDiaryData= async (userName : string) => {
    try{
        const res = await axios.post("/api/record",{
            userName,
            type: "diary"
        })
        return res.data
    }catch (e) {
        return Promise.reject(e)
    }
}



