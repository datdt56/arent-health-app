import {useEffect} from "react";
import axios from "axios";
import useUserData from "@/store/userData";
import fetchUserData from "@/apis/fetchUserData";

const useUser = () => {
    useEffect(() => {
        fetchUserData("", 0).then(res => {
            useUserData.setState(res)
        }).catch(err => {
            alert(err.toString())
        })
    },[])
}

export default useUser