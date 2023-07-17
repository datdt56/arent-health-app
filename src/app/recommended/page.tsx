import {NextPage} from "next";
import React from "react";
import {recommendedCategories} from "@/constant";
import Category from "@/components/common/Category";
import RecommendationGrid from "@/app/recommended/RecommendationGrid";

const RecommendedCategories : React.FC = () => {
    return <div className={'grid grid-cols-4 gap-8 mb-14'}>
        {
            recommendedCategories.map(cat => <Category key={cat.title} title={cat.title} desc={cat.desc}/>)
        }
    </div>
}
const Recommended : NextPage = () => {
    return <div className={'custom-container py-14 flex flex-col'}>
        <RecommendedCategories/>
        <RecommendationGrid/>
    </div>
}

export default Recommended