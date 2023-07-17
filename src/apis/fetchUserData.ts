import axios from "axios";

const fetchUserData = async (userName : string, recordOffset : number) => {
    try{
        const res = await axios.post("/api/user",{
            userName,
            recordOffset
        })
        return res.data
    }catch (e) {
        return Promise.reject(e)
    }
}

export default fetchUserData