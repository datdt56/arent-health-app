import axios from "axios";

export const fetchRecommendation = async (offset :number = 0) => {
    try{
        const res = await axios.get(`/api/recommendation?offset=${offset}`)
        return res.data
    }catch (e) {
        return Promise.reject(e)
    }
}