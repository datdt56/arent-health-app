import { create } from 'zustand'
import {User} from "@/types/user";

const useUserData = create<User>((set) => ({
    achievementRate: 0,
    weightFatData: [],
    mealHistory: [],
}))

export default useUserData