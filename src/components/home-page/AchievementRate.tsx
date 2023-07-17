import achievementRateBg from "@/asset/Photo/d01.png"
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import dayjs from "dayjs";
import useUserData from "@/store/userData";
import Image from "next/image";

const AchievementRate = () => {
    const percentage = useUserData(state => state.achievementRate);
    return <div
        style={{
            background: "linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)",
        }}
        className={'flex justify-center items-center bg-center relative font-inter'}
        id={'achievement-rate'}
    >
        <Image
            className={'mix-blend-hard-light'}
            src={achievementRateBg}
            fill={true}
            alt={'achievement-rate-bg'}
        />
        <CircularProgressbarWithChildren
            styles={{
                trail: {
                    stroke: "none"
                },
                path: {
                    stroke: "#FFF",
                    filter: "drop-shadow(0px 0px 6px #FC7400)"
                }}}
            value={percentage}
            className={'w-[180px] h-[180px] text-white'}
            strokeWidth={2}
        >
            <div>
              <span className={'text-[18px] mr-3'}>
                  {dayjs().format('MM-DD')}
              </span>
                <span className={'text-[25px]'}>
                  {percentage}%
              </span>
            </div>
        </CircularProgressbarWithChildren>
    </div>
}

export default AchievementRate