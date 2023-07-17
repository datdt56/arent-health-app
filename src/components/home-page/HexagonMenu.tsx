import mealIcon from "@/asset/SVG/グループ 11.svg"
import snackIcon from "@/asset/SVG/グループ 23.svg"
import {meals} from "@/constant";
import React from "react";

type Props = {
    setMealType : React.Dispatch<React.SetStateAction<string>>
}

const HexagonMenu : React.FC<Props> = ({setMealType}:Props) => {
    return <div className={'flex justify-center items-center gap-[64px]'}>
        {
            meals.map(meal =>
                <svg
                    className={'cursor-pointer'}
                    key={meal} xmlns="http://www.w3.org/2000/svg" width="116" height="134" viewBox="0 0 116 134" fill="linear-gradient(156deg, #FFCC21 0%, #FF963C 100%)"
                    onClick={() => setMealType(meal)}
                >
                    <path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_35530_933)"/>
                    <image href={meal === 'Snack' ? snackIcon.src : mealIcon.src} x="30" y="30" height="56" width="56" />
                    <text
                        x="50%" y="100" textAnchor="middle"
                        fontFamily="Inter"
                        fill={"white"}
                    >
                        {meal}
                    </text>
                    <defs>
                        <linearGradient id="paint0_linear_35530_933" x1="25.9565" y1="165.202" x2="147.019" y2="118.302" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFCC21"/>
                            <stop offset="1" stop-color="#FF963C"/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
    </div>
}

export default React.memo(HexagonMenu)